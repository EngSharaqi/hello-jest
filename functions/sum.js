function sum(one, two, three) {
    return (one || 0) + (two || null) + (three || null);
};

module.exports = sum;
