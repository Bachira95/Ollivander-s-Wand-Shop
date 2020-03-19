import React from 'react';
import WandCard from './WandCard';

const WandList = props => {
  const WandCards = props.wands.map(wand => (
    <WandCard key={wand.core} wand={wand} />
  ));

  return (
    <div className="authors">
      <h3>Wands Ohoobbaa</h3>
      <div className="row">{WandCards}</div>
    </div>
  );
};

export default WandList;
