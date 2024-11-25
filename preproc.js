
/* 
  Preprocessing, automatically adding page breaks to headings:
  1-2 level headings, add horizontal page break: <!--h-->
  3-6 level headings, add vertical page break: <!--v-->

  This is my own rules of use, relatively reasonable, have a good structure and logic, especially when showing the overview view of the slides, or when the slide table of contents, you can see the clear structure, if you don't like it, you can modify it as you like.
*/
module.exports = (markdown, options) => {
  return new Promise((resolve, reject) => {
    var first_time = true;
    return resolve(
      markdown
      .split('\n')
      .map((line, index) => {
        if (!/^#/.test(line) || index === 0)
          return line;

        if (first_time) {   //ignore the separator before the first heading
          first_time = false;
          return line;
        }

        if (/^\s*#{1,2}\s+/.test(line))
          return '\n<!--h-->\n\n' + line;
        else
          return '\n<!--v-->\n\n' + line;
      })
      .join('\n')
    );
  });
};