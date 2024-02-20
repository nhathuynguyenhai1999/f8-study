const { overide, useBabelrc } = require("customize-cra");
module.exports = overide(
    // eslint-disable-next-line react/hooks/rules-of-hooks
    useBabelrc()
);