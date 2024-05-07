import React, { createContext, useContext, useState } from 'react';
import questionsData from '../data';

// Crie o contexto
const QuestionContext = createContext();

// Crie o provedor de contexto
const QuestionContextProvider = ({ children }) => {
  const [questions, updateQuestion] = useState([...questionsData]);

  return (
    <QuestionContext.Provider value={{ questions, updateQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};

// Crie o hook customizado para utilizar o contexto
const useQuestionContext = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error('useQuestionContext deve ser usado dentro de um QuestionContextProvider');
  }
  return context;
};

export { QuestionContextProvider, useQuestionContext };