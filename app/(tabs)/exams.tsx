import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const quizData = [
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
    correctAnswer: 1
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Jupiter", "Mars", "Saturn"],
    correctAnswer: 2
  },
  {
    question: "What is 15 + 27?",
    options: ["41", "42", "43", "44"],
    correctAnswer: 1
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: 2
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: 3
  }
];

const Exam = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(quizData.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

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

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === quizData[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const renderScoreCard = () => {
    const percentage = Math.round((calculateScore() / quizData.length) * 100);
    return (
      <View style={styles.scoreCardContainer}>
        <View style={styles.percentageCircle}>
          <Text style={styles.percentageText}>{percentage}%</Text>
        </View>
        <Text style={styles.scoreTitle}>Quiz Complete!</Text>
        <Text style={styles.scoreText}>
          You scored {calculateScore()} out of {quizData.length}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleRestart}>
          <Text style={styles.buttonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderQuizCard = () => {
    const { question, options, correctAnswer } = quizData[currentQuestion];
    return (
      <>
        <View style={styles.header}>
          <Text style={styles.title}>Quiz App</Text>
          <Text style={styles.progressText}>
            Question {currentQuestion + 1} of {quizData.length}
          </Text>
        </View>
        <View style={styles.progressBarContainer}>
          <View 
            style={[
              styles.progressBar,
              { width: `${((currentQuestion + 1) / quizData.length) * 100}%` }
            ]}
          />
        </View>
        <View style={styles.quizCard}>
          <Text style={styles.questionText}>{question}</Text>
          <View style={styles.optionsContainer}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => !showResult && handleAnswerSelect(index)}
                disabled={showResult}
                style={[
                  styles.optionButton,
                  showResult
                    ? index === correctAnswer
                      ? styles.correctAnswer
                      : index === selectedAnswers[currentQuestion] && index !== correctAnswer
                      ? styles.wrongAnswer
                      : styles.defaultOption
                    : selectedAnswers[currentQuestion] === index
                    ? styles.selectedAnswer
                    : styles.defaultOption
                ]}
              >
                <Text style={[
                  styles.optionText,
                  showResult && index === correctAnswer ? styles.correctText :
                  showResult && index === selectedAnswers[currentQuestion] && index !== correctAnswer
                    ? styles.wrongText : styles.defaultText
                ]}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {showResult && (
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>
              {currentQuestion < quizData.length - 1 ? 'Next Question' : 'View Results'}
            </Text>
          </TouchableOpacity>
        )}
      </>
    );
  };

  return (
    <View style={styles.container}>
      {quizCompleted ? renderScoreCard() : renderQuizCard()}
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
  header: {
    marginBottom: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
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

export default Exam;