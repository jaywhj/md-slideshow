
/* 
  Preprocessing, automatically adding page breaks to headings:
  1-2 level headings, add horizontal page break: <!--h-->
  3-6 level headings, add vertical page break: <!--v-->

  This is my own rules of use, have a good structure and logic, especially when showing the overview view of the slides, or when the slide table of contents, you can see the clear structure, if you don't like it, you can modify it as you like.
*/
module.exports = (markdown, options) => {
  return new Promise((resolve, reject) => {
    var firstHeadingFound = false;
    return resolve(
      markdown
      .split('\n')
      .map((line, index) => {

        const stripped = line.trimStart();
        if (stripped.startsWith('#')) {
            if (firstHeadingFound) {
                return (stripped.split(' ')[0].length <= 2 ? '\n<!--h-->\n\n' + line : '\n<!--v-->\n\n' + line);
            } else {
                firstHeadingFound = true;
            }
        }
        return line;

      })
      .join('\n')
    );
  });
};