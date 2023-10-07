import colors from "@colors/colors";

export default class Logging {
  public static log = (args: any) => this.info(args);
  public static info = (args: any) =>
    console.log(
      colors.grey(`[${new Date().toLocaleString()}]`),
      colors.brightCyan(" [INFO]"),
      typeof args === "string" ? colors.cyan(args) : args
    );

  public static warn = (args: any) =>
    console.log(
      colors.grey(`[${new Date().toLocaleString()}]`),
      colors.brightYellow(" [WARN]"),
      typeof args === "string" ? colors.yellow(args) : args
    );

  public static error = (args: any) =>
    console.log(
      colors.red(`[${new Date().toLocaleString()}]`),
      colors.brightRed(" [ERROR]"),
      typeof args === "string" ? colors.red(args) : args
    );
}
