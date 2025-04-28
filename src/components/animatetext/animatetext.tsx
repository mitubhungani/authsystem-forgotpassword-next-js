// "use client";

// import { useSprings, animated } from '@react-spring/web';
// import { useEffect, useRef, useState } from 'react';

// interface SplitTextProps {
//   text?: string;
//   className?: string;
//   delay?: number;
//   animationFrom?: Record<string, any>;
//   animationTo?: Record<string, any>;
//   easing?: string | ((t: number) => number);
//   threshold?: number;
//   rootMargin?: string;
//   textAlign?: React.CSSProperties['textAlign'];
//   onLetterAnimationComplete?: () => void;
// }

// const SplitText = ({
//   text = '',
//   className = '',
//   delay = 100,
//   animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
//   animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
//   easing = (t: number) => 1 - Math.pow(1 - t, 3), // Default easing function
//   threshold = 0.1,
//   rootMargin = '-100px',
//   textAlign = 'center',
//   onLetterAnimationComplete,
// }: SplitTextProps) => {
//   const words = text.split(' ').map(word => word.split(''));
//   const letters = words.flat();
//   const [inView, setInView] = useState(false);
//   const ref = useRef<HTMLParagraphElement | null>(null);
//   const animatedCount = useRef(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           if (ref.current) {
//             observer.unobserve(ref.current);
//           }
//         }
//       },
//       { threshold, rootMargin }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => observer.disconnect();
//   }, [threshold, rootMargin]);

//   // Create the springs animation
//   const springs = useSprings(
//     letters.length,
//     letters.map((_, i) => ({
//       from: animationFrom,
//       to: inView
//         ? async (next) => {
//             await next(animationTo);
//             animatedCount.current += 1;
//             if (animatedCount.current === letters.length && onLetterAnimationComplete) {
//               onLetterAnimationComplete();
//             }
//           }
//         : animationFrom,
//       delay: i * delay,
//       config: { easing: typeof easing === 'function' ? easing : (t: number) => t },
//     }))
//   );

//   return (
//     <p
//       ref={ref}
//       className={`split-parent overflow-hidden inline ${className}`}
//       style={{ textAlign, whiteSpace: 'normal', wordWrap: 'break-word' }}
//     >
//       {words.map((word, wordIndex) => (
//         <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
//           {word.map((letter, letterIndex) => {
//             const index = words
//               .slice(0, wordIndex)
//               .reduce((acc, w) => acc + w.length, 0) + letterIndex;

//             return (
//               <animated.span
//                 key={index}
//                 style={springs[index]}
//                 className="inline-block transform transition-opacity will-change-transform"
//               >
//                 {letter}
//               </animated.span>
//             );
//           })}
//           <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
//         </span>
//       ))}
//     </p>
//   );
// };

// export default SplitText;
