import {css} from 'lit-element';

const styleMeter = css`
  .meter {
    background: #efefef; /* Grigio */
    border-radius: 8px;
    border: 1px solid transparent; /* 2 */
    box-shadow:
      0 1px 3px 1px rgba(0,0,0,0.15) inset,
      0 0 0 1px #333; /* 1 */
    height: .75em;
    max-width: 5.5em;
    overflow: hidden;
    width: 100%;
  }

  /* WebKit */
  .meter::-webkit-meter-bar {
    background: #efefef; /* Grigio */
    border: 1px solid transparent; /* 2 */
    border-radius: 8px;
  }

  .meter::-webkit-meter-optimum-value,
  .meter::-webkit-meter-suboptimum-value,
  .meter::-webkit-meter-even-less-good-value {
    border-radius: 8px; 
  }

  .meter::-webkit-meter-optimum-value {
    background: #85cc00; /* verde #3C5C00; */
  }
      
  .meter::-webkit-meter-suboptimum-value {
    background: #F5D000;
  }
      
  .meter::-webkit-meter-even-less-good-value  {
    background: #e65000 ; /* Rosso #D14900; */
  }

  /* Firefox */
  .meter::-moz-meter-bar {
    border-radius: 8px;
  }

  .meter:-moz-meter-optimum::-moz-meter-bar {
    background: #3C5C00;
  }

  .meter:-moz-meter-sub-optimum::-moz-meter-bar {
    background: #F5D000;
  }

  .meter:-moz-meter-sub-sub-optimum::-moz-meter-bar {
    background: #D14900;
  }

`;

export default styleMeter;