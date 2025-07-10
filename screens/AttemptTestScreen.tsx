// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// // create a component
// const AttemptTestScreen = () => {
//     return (
//         <View style={styles.container}>
//             <Text>AttemptTestScreen</Text>
//         </View>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#FFF',
//     },
// });

// //make this component available to the app
// export default AttemptTestScreen;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

// Interfaces for type safety
interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizData {
  [subject: string]: QuizQuestion[];
}

// Subject-wise quiz data
const quizDataBySubject: QuizData = {
  Geography: [
    {
      question: "What is the capital of Japan?",
      options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
      correctAnswer: 1,
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: 3,
    },
  ],
  Science: [
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Jupiter", "Mars", "Saturn"],
      correctAnswer: 2,
    },
  ],
  Math: [
    {
      question: "What is 15 + 27?",
      options: ["41", "42", "43", "44"],
      correctAnswer: 1,
    },
  ],
  Art: [
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      correctAnswer: 2,
    },
  ],
};

// Subject Selection Screen
interface SubjectSelectionScreenProps {
  onSelectSubject: (subject: string) => void;
}

const SubjectSelectionScreen: React.FC<SubjectSelectionScreenProps> = ({ onSelectSubject }) => {
  const subjects = Object.keys(quizDataBySubject);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Subject</Text>
      <View style={styles.subjectContainer}>
        {subjects.map((subject) => (
          <TouchableOpacity
            key={subject}
            style={styles.subjectCard}
            onPress={() => onSelectSubject(subject)}
          >
            <Text style={styles.subjectText}>{subject}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Progress Bar Component
interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => (
  <View style={styles.progressBarContainer}>
    <View 
      style={[
        styles.progressBar,
        { width: `${((current + 1) / total) * 100}%` }
      ]}
    />
  </View>
);

// Option Button Component
interface OptionButtonProps {
  option: string;
  index: number;
  onPress: (index: number) => void;
  disabled: boolean;
  isSelected: boolean;
  isCorrect: number;
  showResult: boolean;
}

const OptionButton: React.FC<OptionButtonProps> = ({
  option,
  index,
  onPress,
  disabled,
  isSelected,
  isCorrect,
  showResult,
}) => (
  <TouchableOpacity
    onPress={() => !showResult && onPress(index)}
    disabled={disabled}
    style={[
      styles.optionButton,
      showResult
        ? index === isCorrect
          ? styles.correctAnswer
          : index === isSelected && index !== isCorrect
          ? styles.wrongAnswer
          : styles.defaultOption
        : isSelected
        ? styles.selectedAnswer
        : styles.defaultOption,
    ]}
  >
    <Text
      style={[
        styles.optionText,
        showResult && index === isCorrect
          ? styles.correctText
          : showResult && index === isSelected && index !== isCorrect
          ? styles.wrongText
          : styles.defaultText,
      ]}
    >
      {option}
    </Text>
  </TouchableOpacity>
);

// Quiz Card Component
interface QuizCardProps {
  question: string;
  options: string[];
  correctAnswer: number;
  currentQuestion: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  showResult: boolean;
  onAnswerSelect: (index: number) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  options,
  correctAnswer,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  showResult,
  onAnswerSelect,
}) => (
  <>
    <View style={styles.header}>
      <Text style={styles.title}>Quiz App</Text>
      <Text style={styles.progressText}>
        Question {currentQuestion + 1} of {totalQuestions}
      </Text>
    </View>
    <ProgressBar current={currentQuestion} total={totalQuestions} />
    <View style={styles.quizCard}>
      <Text style={styles.questionText}>{question}</Text>
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <OptionButton
            key={index}
            option={option}
            index={index}
            onPress={onAnswerSelect}
            disabled={showResult}
            isSelected={selectedAnswer === index}
            isCorrect={correctAnswer}
            showResult={showResult}
          />
        ))}
      </View>
    </View>
  </>
);

// Score Card Component
interface ScoreCardProps {
  score: number;
  total: number;
  onRestart: () => void;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);
  return (
    <View style={styles.scoreCardContainer}>
      <View style={styles.percentageCircle}>
        <Text style={styles.percentageText}>{percentage}%</Text>
      </View>
      <Text style={styles.scoreTitle}>Quiz Complete!</Text>
      <Text style={styles.scoreText}>
        You scored {score} out of {total}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRestart}>
        <Text style={styles.buttonText}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
};

// Quiz Screen Component
interface QuizScreenProps {
  subject: string;
  onBack: () => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ subject, onBack }) => {
  const quizData = quizDataBySubject[subject];
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(quizData.length).fill(null)
  );
  const [showResult, setShowResult] = useState<boolean>(false);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(quizData.length).fill(null));
    setShowResult(false);
    setQuizCompleted(false);
  };

  const calculateScore = (): number => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === quizData[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  return (
    <View style={styles.container}>
      {quizCompleted ? (
        <ScoreCard
          score={calculateScore()}
          total={quizData.length}
          onRestart={handleRestart}
        />
      ) : (
        <>
          <QuizCard
            question={quizData[currentQuestion].question}
            options={quizData[currentQuestion].options}
            correctAnswer={quizData[currentQuestion].correctAnswer}
            currentQuestion={currentQuestion}
            totalQuestions={quizData.length}
            selectedAnswer={selectedAnswers[currentQuestion]}
            showResult={showResult}
            onAnswerSelect={handleAnswerSelect}
          />
          {showResult && (
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>
                {currentQuestion < quizData.length - 1 ? 'Next Question' : 'View Results'}
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={[styles.button, styles.backButton]} onPress={onBack}>
            <Text style={styles.buttonText}>Back to Subjects</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

// Main App Component
const AttemptTestScreen: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      {selectedSubject ? (
        <QuizScreen subject={selectedSubject} onBack={() => setSelectedSubject(null)} />
      ) : (
        <SubjectSelectionScreen onSelectSubject={setSelectedSubject} />
      )}
    </View>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subjectContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  subjectCard: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
    padding: 16,
    width: (width - 64) / 2,
    alignItems: 'center',
  },
  subjectText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  header: {
    marginBottom: 24,
    alignItems: 'center',
  },
  progressText: {
    fontSize: 16,
    color: '#000',
  },
  progressBarContainer: {
    height: 8,
    width: width - 32,
    maxWidth: 400,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    marginBottom: 24,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#000',
    borderRadius: 4,
  },
  quizCard: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
    padding: 24,
    width: width - 32,
    maxWidth: 400,
    marginHorizontal: 16,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
    textAlign: 'center',
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    padding: 16,
    borderWidth: 2,
    borderRadius: 8,
  },
  defaultOption: {
    backgroundColor: '#FFF',
    borderColor: '#000',
  },
  selectedAnswer: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  correctAnswer: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  wrongAnswer: {
    backgroundColor: '#E5E7EB',
    borderColor: '#9CA3AF',
  },
  optionText: {
    fontSize: 16,
  },
  defaultText: {
    color: '#000',
  },
  correctText: {
    color: '#FFF',
  },
  wrongText: {
    color: '#000',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  backButton: {
    marginTop: 12,
    backgroundColor: '#6B7280',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  scoreCardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
    padding: 32,
    width: width - 32,
    maxWidth: 400,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  percentageCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  percentageText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  scoreTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  scoreText: {
    fontSize: 18,
    color: '#000',
    marginBottom: 24,
  },
});

export default AttemptTestScreen;