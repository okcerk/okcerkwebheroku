import React from "react";

const style = {
  nftButton: {
    backgroundColor: "rgb(32, 129, 226)",
    fontSize: "2rem",
    color: "white",
    border: "none",
    borderRadius: "1rem",
    padding: ".5rem .75rem .5rem .75rem"
  }
};

const openSeaBaseUrl = "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/";

const NftButton = (props) => {
    const { nftId } = props;

    if (!nftId) {
        return null;
    }

    const onNftButtonClick = () => {
        window.open(`${openSeaBaseUrl}${nftId}`, "_blank");
    };
    return (
        <button style={style.nftButton} onClick={onNftButtonClick}>Buy as NFT!</button>
    );
};

export default NftButton;
