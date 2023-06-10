import React from 'react';

const createdNfts = () => {
  const nfts = [
    { name: 'nft1' },
    { name: 'nft2' },
  ];
  return <div>{nfts[0].name}</div>;
};

export default createdNfts;