// Read the file and split into lines
const text = await Deno.readTextFile("input.txt");
const lines: string[] = text.split("\n");
const list = [];
for (const line of lines) {
  // Split the line into fields
    const fields: string[] = line.split("\t");
    console.log(fields)
    const obj = {
        name: fields[1],
        hex: fields[2],
        rgb: fields[3],
    }
    list.push(obj)
}

//write to file
const encoder = new TextEncoder();
const data = encoder.encode(JSON.stringify(list));
await Deno.writeFile("colors.json", data);