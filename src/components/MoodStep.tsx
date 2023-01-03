import { useForm } from "../context/FormContext";
import PrimaryButton from "./PrimaryButton";

export default function MoodStep() {
  const { changeActiveStepIndex } = useForm();

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

  return (
    <>
      <div className="font-bold mb-2">How are you feeling today?</div>
      <div className="flex flex-wrap max-w-xl gap-2 ">
        {moods.map((mood, key) => (
          <div
            key={`${mood}-${key}`}
            className={`w-28 h-28 mood-image text-white rounded justify-center flex items-center  ${
              colors[Math.floor(Math.random() * colors.length)]
            }`}
          >
            {mood}
          </div>
        ))}
      </div>
    </>
  );
}
