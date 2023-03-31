const getTitleFromRoute = (value: string) => {
    switch (value) {
        case "/":
            return "Play Kingdom";
        default:
            return "Play Kingdom";
    }
};

const getDescriptionFromRoute = (value: string) => {
    switch (value) {
        case "/":
            return "";
        default:
            return "";
    }
};

const getMetaImageFromRoute = (value: string) => {
    switch (value) {
        case "/":
            return "";
        default:
            return "";
    }
};

export { getTitleFromRoute, getDescriptionFromRoute, getMetaImageFromRoute };
