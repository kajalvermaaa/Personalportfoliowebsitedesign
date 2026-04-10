import { Hero } from "../components/Hero";
import { TheHuman } from "../components/TheHuman";
import { TheShift } from "../components/TheShift";
import { TheWork } from "../components/TheWork";
import { TheThinking } from "../components/TheThinking";
import { LetsConnect } from "../components/LetsConnect";

export function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <TheHuman />
      <TheShift />
      <TheWork />
      <TheThinking />
      <LetsConnect />
    </main>
  );
}