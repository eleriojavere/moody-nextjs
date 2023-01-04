import { useMemo, useState } from "react";
import { useForm } from "../context/FormContext";

export default function MoodStep() {
  const { selectedMood, changeMood } = useForm();

  const moods = [
    "sad",
    "happy",
    "excited",
    "tired",
    "grateful",
    "angry",
    "worried",
  ];

  const colors = ["green", "blue", "yellow", "purple"];

  const toggleSelection = (mood: string) => {
    changeMood(mood);
  };

  const computeExpensiveValue = () => {
    return moods.map((mood) => {
      return { name: mood, color: Math.floor(Math.random() * colors.length) };
    });
  };

  const memoizedValue = useMemo(() => computeExpensiveValue(), []);

  return (
    <>
      <div className="font-bold mb-2">How are you feeling today?</div>
      <div className="flex flex-wrap max-w-xl gap-2">
        {moods.map((mood, key) => {
          const mappedColors = memoizedValue.find(
            (value) => value.name === mood
          );
          return (
            <button
              onClick={() => toggleSelection(mood)}
              key={`${mood}-${key}`}
              className={`w-28 h-28 mood-image text-white rounded justify-center flex items-center cursor-pointer ${
                mappedColors ? colors[mappedColors.color] : ""
              } ${selectedMood === mood ? "active" : ""}`}
            >
              {mood}
            </button>
          );
        })}
      </div>
    </>
  );
}
