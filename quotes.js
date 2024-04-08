let quotes = [
  {
    quote:
      "Um Erfolg zu haben, muss man wie ein Kranker arbeiten, der überleben möchte. Es gibt keinen anderen Weg.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Die beste Zeit, einen Baum zu pflanzen, war vor 20 Jahren. Die zweitbeste Zeit ist jetzt.",
    author: "Chinesisches Sprichwort",
  },
  {
    quote:
      "Das größte Risiko ist es, kein Risiko einzugehen. In einer schnelllebigen Welt ist der einzige strategische Plan das Risiko.",
    author: "Mark Zuckerberg",
  },
  {
    quote:
      "Es gibt keinen großen Geist ohne einen gewissen Hauch von Wahnsinn.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Es spielt keine Rolle, wie langsam du gehst, solange du nicht stehen bleibst.",
    author: "Konfuzius",
  },
  {
    quote:
      "Derjenige, der gewinnt, ist in der Regel derjenige, der keine Angst hat, etwas Neues auszuprobieren.",
    author: "Dale Carnegie",
  },
  {
    quote:
      "Erfolg ist nicht die Endstation, er ist nur eine Haltestelle auf dem Weg zu noch größerem Erfolg.",
    author: "Henry Ford",
  },
  {
    quote:
      "Lerne gestern. Lebe heute. Hoffe auf morgen. Das Wichtigste ist, nicht aufzugeben.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Ihre Chance auf Erfolg steht im direkten Verhältnis dazu, wie bereit Sie sind, Risiken einzugehen.",
    author: "Tony Robbins",
  },
  {
    quote:
      "Deine Zeit ist begrenzt, verschwende sie nicht damit, das Leben eines anderen zu leben.",
    author: "Steve Jobs",
  },
];

export function randomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  const { quote, author } = quotes[randomIndex];
  console.log(
    `\nUnd zum Schluss möchte ${author} Ihnen sagen:\n\t"${quote}"\n`,
  );
}
