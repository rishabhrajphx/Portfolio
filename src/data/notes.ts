export type Note = {
  slug: string;
  date: string;
  title: string;
  summary: string;
  tags: string[];
  paragraphs: string[];
};

export const notes: Note[] = [
  {
    slug: "software-is-toolmaking",
    date: "Jun 2026",
    title: "Software Is Toolmaking",
    summary:
      "Flint-knapping is the oldest engineering discipline. Stone, then bronze, then steel, then silicon. The medium changes. The loop stays the same.",
    tags: ["philosophy", "engineering"],
    paragraphs: [
      "Stone tools are 3.3 million years old. The first ones were made by striking one rock against another until a sharp edge formed. No language needed. No writing. Just a problem, a material, and a way of thinking about how to shape one with the other.",
      "Software is the same thing at a different timescale.",
      "The loop is identical: understand the material, apply force in the right place, evaluate what you get, adjust. A flint-knapper reads the grain of the stone before striking. A programmer reads the system before changing it. The people who skip that step break things.",
      "What makes a tool a tool is constraint. A knife works because it is narrow and hard and thin. A hammer works because it is heavy and blunt. Remove the constraints and you have a rock. Software with no constraints is just code. The design decisions, the tradeoffs, the things it refuses to do — those are what make it a tool.",
      "Tools also fail in revealing ways. A flake that breaks wrong tells you something about the stone. A production incident tells you something about the system. Both are worth studying.",
      "The oldest engineers did not think of themselves as engineers. They had problems, materials, and time. We are not different. The screen is a different kind of stone.",
    ],
  },
  {
    slug: "flint-knapping-debugging",
    date: "Jun 2026",
    title: "What Flint-knapping Taught Me About Debugging",
    summary:
      "You cannot un-strike a flake. One bad hit and you're making a scraper instead of a point. I think about irreversibility every time I'm about to touch production.",
    tags: ["debugging", "craftsmanship"],
    paragraphs: [
      "The first thing you learn flint-knapping is that you cannot undo a strike.",
      "You can adjust. You can compensate. But the flake that came off is gone, and the stone is now different. Every hit matters because the next hit depends on this one. If you do not understand what you are about to do, you will not understand what you have done, and the tool will be wrong in ways you cannot fix.",
      "I think about this when debugging.",
      "The instinct when something breaks is to change something. Anything. Swap the config, restart the service, add a log line, try the thing that worked last time. Sometimes it works. More often you end up with a broken system plus a change you do not understand, and now you have two problems.",
      "The flint-knapper's discipline is to read before striking. Look at the platform angle. Feel the thickness. Trace the stress lines with your thumbnail. Then decide. The debugging equivalent is the same. Read the logs before adding instrumentation. Form a hypothesis before changing code. The system is telling you something. Slow down long enough to hear it.",
      "Pressure flaking is the technique you use for fine work. Instead of hitting the stone, you press a tool against the edge and push. Small, controlled removals. It is slower and more precise than percussion. You use it when the work is delicate and mistakes are expensive. Some bugs need percussion. Most need pressure flaking.",
      "The other thing flint-knapping teaches you is what irreversibility feels like. After a while you can hold a piece and sense when a strike would take too much off. You develop an intuition for fragility. I do not know exactly how to describe the transfer, but I debug differently than I did before I started knapping. I sit with a problem longer before touching anything.",
    ],
  },
  {
    slug: "voice-ai-needs-tools",
    date: "Jun 2026",
    title: "Why Voice AI Needs Tools",
    summary:
      "I spent a month building a voice assistant that could not do anything useful. It was very good at sounding capable. Adding tool calls changed everything.",
    tags: ["ai", "voice", "tool-calling"],
    paragraphs: [
      "I spent the first month building Mnemosyne without any tool calls.",
      "It could have a conversation. It could answer questions from its training data. It sounded useful, and in a demo it was. But every time I tried to use it for something real, I ran into the same wall: the model knew things as of its training cutoff, and the world had moved on.",
      "Ask it the weather, it would say it does not have access to current data. Ask it about a stock price, same answer. Ask it to set a reminder, nothing. It was a very fluent dead end.",
      "The moment I added tool calls, everything changed. Not because the model got smarter. It did not. The model is the same model. What changed is what it could reach. Weather: call the API. Stock prices: call the API. Web search: call the API. The model became an interface to the world instead of an interface to its weights.",
      "Voice makes this more obvious than text. When you talk to something, you expect it to act. You expect it to know what time it is. You do not expect it to hedge about its training data. The conversational format creates expectations that a pure language model cannot meet.",
      "The interesting thing about tool calling is how it changes what users ask for. When the assistant could only reason, people asked it to reason. When it could look things up, people started asking it to look things up. When it could draw on the canvas, people asked it to draw. The capability shapes the request.",
      "Do not ship a voice interface until the model can act on the world. An assistant that can only talk is a demo.",
    ],
  },
  {
    slug: "climbing-routes-graph-search",
    date: "Jun 2026",
    title: "Climbing Routes and Graph Search",
    summary:
      "A climbing route is a graph. Holds are nodes, body position is state. Once I started thinking about it that way, both problems got easier.",
    tags: ["algorithms", "climbing"],
    paragraphs: [
      "A climbing route is a graph.",
      "The holds are nodes. Your body position at each hold is state. The possible moves from one position to the next are edges. Getting from the ground to the anchor is a path through this graph. Beta, the climber's term for the sequence of moves, is a cached path that someone else found and you are reproducing.",
      "When you read a route from the ground, you are doing a heuristic search. You cannot see every hold clearly, you do not know which ones are good, and you are estimating the cost of different paths based on incomplete information. You look for the line of least resistance. You make guesses, mark them as tentative, and climb until they are confirmed or falsified.",
      "The heuristics are the same ones that make graph search efficient. Prefer nodes that move you toward the goal. Avoid paths that look expensive. When you hit a dead end, backtrack to the last good position.",
      "Commitment is where it gets interesting. In graph search on a computer, backtracking is cheap. On a climbing route, reversing a hard move costs more than the original move. Sometimes it is not possible at all. This means the route-reading phase matters more than it would in an algorithm that can freely backtrack. You are running a more constrained search, and the cost of a wrong guess is higher.",
      "I have not found a clean, direct application of this to software. What I have found is that climbing built a particular kind of thinking: identify where you are, model where you can go, commit only when the path is clear. It transfers.",
      "The other thing climbing does is calibrate risk tolerance. Some routes have a bad fall at a specific move. You either climb through it or you do not. Learning to reason clearly about risk instead of just feeling afraid of it is a useful habit in a lot of contexts.",
    ],
  },
];
