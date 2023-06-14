const swc = require("@swc/core");

swc
  .transformFile("input.js", {
    sourceMaps: true,
    jsc: {
      parser: {
        syntax: "ecmascript",
      },
      transform: {},
    },
  })
  .then((output) => {
    console.log("=== code ===");
    console.log(output.code);

    console.log("\n=== map ===");
    console.log(output.map); // source map (in string)

    console.log("\n=== Execution ===");
    eval(output.code);
  });
