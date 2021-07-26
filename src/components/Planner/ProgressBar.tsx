import { useEffect, useState } from 'react';
//Styles
import { ProgressWrapper } from './style/ProgressBar.styles';

type Props = {
  currentWeek: number;
};

const ProgressBar: React.FC<Props> = ({ currentWeek }) => {
  const [circles, setCircles] = useState<NodeListOf<Element> | never[]>([]);

  useEffect(() => {
    setCircles(document.querySelectorAll('.circle'));
  }, []);

  useEffect(() => {
    if (circles.length) {
      circles.forEach((circle, nr) => {
        nr < currentWeek
          ? circle.classList.add('done')
          : circle.classList.remove('done');
      });
      const progress: HTMLElement | null = document.getElementById('progress');
      progress!.style.width = (currentWeek - 1) * 22 + 'px';
      currentWeek < 12 && circles[currentWeek].classList.remove('active');
      currentWeek > 1 && circles[currentWeek - 2].classList.remove('active');
      circles[currentWeek - 1].classList.add('active');
    }
  }, [currentWeek, circles]);

  return (
    <ProgressWrapper>
      <h5>Your 12 week progress</h5>
      <div className="progress-container">
        <div className="progress" id="progress"></div>
        <div className="progress-bg"></div>
        <div className="circle-container">
          <div className="circle done"></div>
          <p>1</p>
        </div>
        <div className="circle-container">
          <div className="circle done"></div>
          <p>2</p>
        </div>
        <div className="circle-container">
          <div className="circle done"></div>
          <p>3</p>
        </div>
        <div className="circle-container">
          <div className="circle done"></div>
          <p>4</p>
        </div>
        <div className="circle-container">
          <div className="circle done"></div>
          <p>5</p>
        </div>
        <div className="circle-container">
          <div className="circle done"></div>
          <p>6</p>
        </div>
        <div className="circle-container">
          <div className="circle"></div>
          <p>7</p>
        </div>
        <div className="circle-container">
          <div className="circle"></div>
          <p>8</p>
        </div>
        <div className="circle-container">
          <div className="circle"></div>
          <p>9</p>
        </div>
        <div className="circle-container">
          <div className="circle"></div>
          <p>10</p>
        </div>
        <div className="circle-container">
          <div className="circle"></div>
          <p>11</p>
        </div>
        <div className="circle-container">
          <div className="circle"></div>
          <p>12</p>
        </div>
      </div>
    </ProgressWrapper>
  );
};

export default ProgressBar;
