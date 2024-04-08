export function htmlLineBreaks(str: string): string {

    let out = "";
    let hasParagraph = false;
    let isPrevLF = false;

    for (let i = 0; i < str.length; i++) {
        const c = str[i];

        // Skip CR characters
        if (c === '\r') {
            continue;
        }

        // Add non-LF characters to out
        if (c !== '\n') {
            
            if (isPrevLF) {
                // LF + non-LF
                out += '<br>';
            }

            out += c;
            isPrevLF = false;
            continue;
        }

        if (isPrevLF) {
            // LF + LF
            out += '</p><p>';
            isPrevLF = false;
            hasParagraph = true;
        } else {
            // non-LF + LF
            isPrevLF = true;
        }
    }

    if (isPrevLF) {
        out += '<br>';
    }

    if (hasParagraph) {
        return '<p>' + out + '</p>';
    }

    return out;
}