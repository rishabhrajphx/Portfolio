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
      "I think about software as toolmaking because that is the comparison that keeps working.",
      "Stone tools are millions of years old. The first toolmakers did not need a formal theory of engineering. They had a problem, a material, and a repeatable method. The evidence is the tool itself. They struck stone in a way that produced an edge, and they did it well enough for the result to be useful.",
      "That is the basic structure of toolmaking. A person studies a material, changes it, checks the result, and changes it again. If the person does not understand the material, the tool comes out wrong.",
      "With flint-knapping, the material is stone. It has grain, thickness, platforms, ridges, angles, and fracture patterns. The stone does not become whatever I want it to become. It breaks according to its structure.",
      "Software also has structure. A codebase has state, dependencies, permissions, latency, naming conventions, old shortcuts, weird edge cases, and parts of the system that nobody wants to touch because too many other things depend on them. These are not details around the work. These are the material.",
      "A beginner often acts on the version of the system that exists in his head. He knows what he wants the program to do, so he edits the code. Then the result surprises him. The surprise usually means he did not understand the actual system.",
      "A tool is not better because it can do everything. A knife is useful because it has a specific shape. It has an edge. It has hardness. It has a grip. It has limits. If those limits disappear, the knife does not become more advanced. It becomes less useful.",
      "Software works the same way. A program becomes useful when it has a definite shape. It accepts certain inputs and rejects others. It supports some workflows and refuses others. It makes tradeoffs instead of pretending that every use case can fit.",
      "I trust software more when it has clear edges. If an input is invalid, the program should reject it. If a state should not exist, the system should prevent it or expose it clearly. If an action is unsupported, the interface should not imply that it is supported. Software that accepts everything usually moves the confusion somewhere else.",
      "Failure shows where the real shape of the system differs from the imagined one. When a flake breaks in the wrong direction, it shows that I misunderstood the platform, the force, or the stone. When software fails, it gives similar evidence. A bug report can show that the interface communicated the wrong thing. A production incident can show that a dependency was more important than people thought. A user can do something that the programmer considered impossible, which usually means the programmer did not define impossible carefully enough.",
      "Those failures are useful because they are specific. They show the part of the system that needs to be understood better.",
      "That is the part of engineering I like. I like when the system becomes legible. I like when the constraints become clear. I like when a tool becomes sharper because I understand what it should not do.",
      "The first toolmakers had stone. I have state, code, and machines that execute unclear thinking exactly as written.",
    ],
  },
  {
    slug: "flint-knapping-debugging",
    date: "Jun 2026",
    title: "What Flint-Knapping Taught Me About Debugging",
    summary:
      "You cannot un-strike a flake. One bad hit and you're making a scraper instead of a point. I think about irreversibility every time I'm about to touch production.",
    tags: ["debugging", "craftsmanship"],
    paragraphs: [
      "The first serious lesson in flint-knapping is that undo does not exist.",
      "You can keep working after a bad strike. You can change the plan. You can make a smaller tool than the one you meant to make. You can sometimes use the mistake. But the removed flake is gone, and the stone is different now. Every strike changes what can happen next.",
      "Debugging has the same problem.",
      "When a system breaks, my first impulse is to change something. I want to restart the service, edit the config, add a log line, clear a cache, roll back the last suspicious commit, or try the fix that worked during some other failure. That impulse feels productive because movement feels productive. It is often just movement.",
      "A change made too early can destroy information. If I restart a service before I understand why it failed, I may remove the state that would have explained the failure. If I change three things at once, I may fix the symptom while losing the ability to know which change mattered. If I add logging without a hypothesis, I may only create more output to stare at.",
      "Flint-knapping punishes careless action quickly. Before striking, I have to inspect the piece. I check the platform angle. I check the thickness behind the edge. I look at ridges that can carry force. I look for places where the stone is already weak. I am not only asking where I can hit. I am asking what the strike will change.",
      "That question matters in debugging. Before I touch the system, I want to know what the action is supposed to prove. If I add a log line, I should know what uncertainty it reduces. If I change an input, I should know what each possible output would imply. If I restart a process, I should know whether I am testing a theory or just trying to make the problem disappear.",
      "There is a useful distinction in flint-knapping between percussion and pressure flaking. Percussion uses impact. It removes larger flakes and changes the piece quickly. Pressure flaking uses controlled pressure along an edge. It removes smaller flakes and is better for precise work.",
      "Debugging has the same split. Some failures need percussion. A bad deploy may need to be rolled back. A broken dependency may need to be removed. A stuck process may need to be killed. Those are real fixes when the situation calls for them.",
      "Most bugs need pressure flaking. They need one controlled change at a time. They need a small test, a narrow observation, and a clear comparison against the expected result. The point is not to look busy. The point is to keep the problem understandable.",
      "The emotional part is difficult. A broken system creates pressure to act, especially when other people are waiting. Flint-knapping trains the opposite habit. I hold the piece longer. I rotate it. I inspect the ridges. I try not to strike just because I am uncomfortable.",
      "I debug differently because of that. I still make impatient changes sometimes, but I notice the impatience faster. I try to keep the shape of the problem intact until I understand it. A system can usually survive one bad change. The real danger is when I stop knowing which change caused which result.",
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
      "When I started building Mnemosyne, the first version was mostly a voice interface around a language model. It could listen, respond, and hold a conversation. That was interesting at first because speech-to-speech interaction feels strange when it works.",
      "It became limited quickly.",
      "The issue was not that I expected the model to know live information by magic. I built the program, so I knew what I had connected to it. The issue was that the system could not reach anything. It could generate language, but it could not inspect current state, call my code, save durable memory, schedule anything, search a source, or perform an action outside the conversation.",
      "That made it feel fake in a specific way. It was not useless because it was unintelligent. It was useless because it had no hands.",
      "Text chat can tolerate that limitation longer. The user is already working with text, tabs, search results, editors, and copy-paste. In that setting, a model that only reasons can still be useful.",
      "Voice changes the expectation. When I speak to an assistant, I am usually trying to turn an intention into an action. I am not looking for a long explanation of the action. I want the system to understand the request and do the relevant work. If it can only respond with more speech, the interface feels mismatched.",
      "Tool calls changed Mnemosyne because they changed the boundary of the system. The model was no longer sealed inside generated text. It could route a request into an actual capability. It could call a function, retrieve a result, write something, check something, or pass structured arguments into code I controlled.",
      "Tool calling is not automatically intelligence. A bad tool-using assistant is worse than a plain chatbot because it can make mistakes in the world instead of only making mistakes in language. The hard part is the loop around the tool. The model has to understand the request, decide whether a tool is needed, choose the right tool, pass the right arguments, interpret the result, and report the outcome without wasting the user's time.",
      "Voice makes mistakes in that loop more obvious. In text, a user can skim past a bad paragraph. In voice, the assistant wastes time out loud. A spoken interface has to be more direct because the cost of useless output is higher.",
      "That is why I do not think voice AI should be treated as chat with a microphone attached. The microphone is only the input method. The actual product is the system behind it: the tools, the memory, the state, the permissions, and the verification around each action.",
      "Building Mnemosyne made this obvious to me. A voice assistant that can only talk may be a good demo, but it is not a very good assistant. If it speaks as if it is present, it needs access to the present. If it responds as if it can help, it needs tools that let it do real work.",
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
      "A climbing route resembles a graph, but the comparison is not perfectly clean.",
      "The holds can be treated as nodes. The possible moves between holds can be treated as edges. Body position is part of the state. The anchor is the goal. Beta is a saved path through the problem that another climber found and explained afterward.",
      "That description is useful, but it leaves out the annoying part. I do not get to see the whole graph before I start.",
      "From the ground, the route is only partly readable. A hold can look good from below and feel bad once I touch it. A foot can look irrelevant and then become the entire reason a move works. Chalk can help, but chalk can also mark somebody else's bad idea. The wall gives information unevenly, and it often gives the most important information after I have already committed to a sequence.",
      "Route-reading is a kind of heuristic search under uncertainty. I estimate which moves will be expensive. I look for positions that seem stable. I guess which holds are directional. I try to find rests. I decide whether a sequence wants strength, balance, flexibility, or a body position I have not understood yet.",
      "Then I start climbing, and the wall corrects the model.",
      "That correction is physical. A hold is worse than I predicted. A foot is better than I predicted. A move that looked powerful turns out to depend on hip position. A move that looked technical turns out to be a simple pull if I use the right foot. The route keeps replacing my imagined graph with the real one.",
      "The comparison to graph search becomes more interesting when backtracking enters the problem. In a normal algorithm example, taking a wrong branch can be cheap. The program can return to a previous node and try another path. On a climbing route, a wrong branch has a cost that stays in the body. Reversing a move may take more energy than making the move in the first place. Sometimes reversing is not possible. Sometimes I can reverse the move, but I am now too tired to climb the correct sequence well.",
      "That means the search has memory. My previous choices change what I can do next. The route is not only a graph on the wall. It is also a changing graph inside my forearms, shoulders, skin, breathing, and fear response.",
      "That is the part that transfers to software for me. I do not mean that climbing is secretly Dijkstra's algorithm. I mean that climbing trains a habit of thinking in state, transitions, cost, and commitment. I ask where I am, what options are reachable from here, what each option makes easier, and what each option makes impossible.",
      "That question appears in programming all the time. A team can choose an architecture because it seems fast now, and that choice can make future work slower. A developer can patch a bug in a local way, and that patch can create stranger behavior later. A system can move into a state that is technically valid but hard to escape.",
      "Climbing also makes risk easier to think about because the difference between fear and consequence becomes concrete. Some moves feel scary but are safe. Some moves feel casual but have a bad fall. My fear is useful information, but it is not the whole analysis. I still have to inspect what actually happens if the move fails.",
      "Software has the same problem. Some changes feel risky because they are unfamiliar. Other changes feel safe because they are routine, even when the blast radius is large. The feeling attached to the action is not enough. I have to inspect the fall.",
      "I like climbing because it makes abstract ideas less abstract. On the wall, graph search is not a diagram. It is a sequence of choices made with limited information, limited energy, and real consequences for choosing badly. That is closer to engineering than the clean version on a whiteboard.",
    ],
  },
];
