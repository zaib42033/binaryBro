import { useEffect, useState } from "react";

const words = [
  "Web Developer",
  "Video Editor",
  "Graphic Designer",
  "Web Designer",
  "Software Engineer",
];

const TypingText = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    // 4 second pause after completing the word
    if (!isDeleting && text === currentWord) {
      const pause = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);

      return () => clearTimeout(pause);
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setText(currentWord.substring(0, text.length - 1));

          if (text.length === 1) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        } else {
          setText(currentWord.substring(0, text.length + 1));
        }
      },
      isDeleting ? 100 : 150,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span>
      {text}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
};

export default TypingText;
