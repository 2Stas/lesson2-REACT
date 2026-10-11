import useOnScreen from '../hooks/useOnScreen.js';

export default function ServiceCard({ title, text }) {
  const [ref, visible] = useOnScreen();

  return (
    <div ref={ref} className={`service ${visible ? 'visible' : ''}`}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
