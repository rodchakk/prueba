'use client';
import { useState } from 'react';
import { TriviaContext } from '../context/triviaContext';
import type { Pregunta } from '../models/pregunta';

export function TriviaProvider({ children }: { children: React.ReactNode }) {
  const [puntaje, setPuntaje] = useState(0);
  const [respuestas, setRespuestas] = useState(0);

  return (
    <TriviaContext.Provider
      value={{
        preguntas: [] as Pregunta[], // aquí puedes cargar las preguntas si quieres global
        puntaje,
        respuestas,
        puntajeTotal: 0,
        sumarPuntaje: (pts: number) => setPuntaje(p => p + pts),
        contarRespondida: () => setRespuestas(r => r + 1)
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
}

