'''
    Preprocessing, automatically adding page breaks to headings:
    1-2 level headings, add horizontal page break: <!--h-->
    3-6 level headings, add vertical page break: <!--v-->

    This is my own rules of use, have a good structure and logic, especially when showing the overview view of the slides, or when the slide table of contents, you can see the clear structure, if you don't like it, you can modify it as you like.
'''

def preprocess(markdown_text: str) -> str:
    lines = markdown_text.split('\n')
    result = []
    first_heading_found = False

    for index, line in enumerate(lines):
        stripped = line.lstrip()
        if stripped.startswith('#'):
            if first_heading_found:
                result.append('\n<!--h-->\n' if len(stripped.split()[0]) <= 2 else '\n<!--v-->\n')
            else:
                first_heading_found = True
        result.append(line)

    return '\n'.join(result)