import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Button from "components/Button";
import { ReactComponent as RatingIcon } from "assets/icons/rating.svg";
import { ReactComponent as MarkerIcon } from "assets/icons/marker.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";

import { IRowListing } from "./RowListing.interface";
import { styled } from "styles/theme";

const RowListing = ({ contents, onPick }: IRowListing) => {
    const handleAddCart = (id: string) => () => {
        const pickedContent = contents.find(content => content.id === id)!;

        onPick(pickedContent);
    };

    return (
        <StyledRowListingContainer>
            {contents.map(content => (
                <StyledListingRow key={content.id}>
                    <StyledImage src={content.imageSource} alt={`Listing image of ${content.title}`} />
                    <StyledListingColumn>
                        <StyledListingTitle>{content.title}</StyledListingTitle>
                        <StyledListingDescription>{content.description}</StyledListingDescription>
                        <StyledListingRow>
                            <StyledListingRating>
                                <RatingIcon />
                                {content.rating}
                            </StyledListingRating>
                            <StyledListingDistance>
                                <MarkerIcon />
                                {content.distance}
                            </StyledListingDistance>
                        </StyledListingRow>
                        <StyledCallToActionRow>
                            <Button variant='tertiary' onClick={handleAddCart(content.id)}>
                                <>
                                    <CartIcon />
                                    <StyledSpan>Add to cart</StyledSpan>
                                </>
                            </Button>
                        </StyledCallToActionRow>
                    </StyledListingColumn>
                </StyledListingRow>
            ))}
        </StyledRowListingContainer>
    );
};

const StyledRowListingContainer = styled("div", {
    margin: "12px 0",
    maxHeight: "50vh",
    overflow: "auto",
    borderBottom: "1px solid",
    borderBottomColor: "rgba(241, 243, 245, 1)"
});

const StyledListingRow = styled("div", {
    display: "flex"
});

const StyledCallToActionRow = styled("div", {
    marginTop: "12px",
    textTransform: "uppercase"
});

const StyledImage = styled(LazyLoadImage, {
    height: "75.4px",
    width: "72px",
    backgroundColor: "gray",
    filter: "drop-shadow(0px 10px 15px #C8C9CD)",

    borderRadius: "12px",
    marginRight: "16px"
});

const StyledListingColumn = styled("div", {});

const StyledListingTitle = styled("h3", {
    margin: 0,
    marginBottom: "4px",
    fontWeight: 600,
    fontSize: "16px",
    letterSpacing: "0.1px"
});

const StyledListingDescription = styled("p", {
    margin: 0,
    marginBottom: "13px",
    fontWeight: 400,
    fontSize: "12px",
    letterSpacing: "0.2px"
});

const StyledListingRating = styled("div", {
    marginRight: "25px",
    display: "flex",
    alignItems: "center",

    justifyContent: "space-between",
    fontWeight: 400,
    fontSize: "12px",
    letterSpacing: "0.2px",
    width: "35px"
});

const StyledListingDistance = styled("div", {
    display: "flex",
    alignItems: "center",
    width: "55px",
    justifyContent: "space-between",
    fontWeight: 400,
    fontSize: "12px",
    letterSpacing: "0.2px"
});

const StyledSpan = styled("span", {
    textTransform: "uppercase",
    marginLeft: "8px"
});

export default RowListing;
