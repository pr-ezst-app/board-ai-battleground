import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.ezst.app/projects/0c698328-9ff8-4c88-8629-6591aae520b7/files/dca0bc31-0bd0-4df2-a9e9-952dcb88ba65.jpg";

const GAMES = [
  { id: 1, name: "Chess", emoji: "♟️", players: "2", time: "30–90 min", online: 142, tag: "Strategy" },
  { id: 2, name: "Backgammon", emoji: "🎲", players: "2", time: "20–40 min", online: 89, tag: "Classic" },
  { id: 3, name: "Checkers", emoji: "🔴", players: "2", time: "15–30 min", online: 67, tag: "Classic" },
  { id: 4, name: "Mahjong", emoji: "🀄", players: "2–4", time: "60–120 min", online: 54, tag: "Tile" },
  { id: 5, name: "Dominoes", emoji: "⬛", players: "2–4", time: "20–45 min", online: 38, tag: "Tile" },
  { id: 6, name: "Catan", emoji: "🏝️", players: "3–4", time: "60–120 min", online: 29, tag: "Strategy" },
];

const LEADERBOARD = [
  { rank: 1, name: "Lord Blackwood", wins: 1847, rating: 2341, streak: 12, avatar: "🎩" },
  { rank: 2, name: "Lady Ashford", wins: 1623, rating: 2198, streak: 7, avatar: "👑" },
  { rank: 3, name: "Sir Pemberton", wins: 1401, rating: 2055, streak: 4, avatar: "🧙" },
  { rank: 4, name: "Count Velmire", wins: 1289, rating: 1987, streak: 3, avatar: "🦅" },
  { rank: 5, name: "Duchess Vane", wins: 1102, rating: 1876, streak: 8, avatar: "🌹" },
  { rank: 6, name: "Baron Crestfall", wins: 987, rating: 1754, streak: 2, avatar: "⚔️" },
  { rank: 7, name: "The Wanderer", wins: 874, rating: 1623, streak: 5, avatar: "🗺️" },
];

const ACHIEVEMENTS = [
  { icon: "🏆", name: "Grand Master", desc: "Win 1000 games", earned: true },
  { icon: "⚡", name: "Lightning Strike", desc: "Win in under 5 minutes", earned: true },
  { icon: "🔥", name: "On Fire", desc: "10 wins in a row", earned: true },
  { icon: "🎯", name: "Precision", desc: "Perfect game — no mistakes", earned: true },
  { icon: "🌙", name: "Night Owl", desc: "Play after midnight", earned: true },
  { icon: "🤝", name: "Good Sport", desc: "100 friendly matches", earned: false },
  { icon: "👑", name: "Undefeated", desc: "100 wins without a loss", earned: false },
  { icon: "🗺️", name: "Explorer", desc: "Play all 6 games", earned: false },
  { icon: "💎", name: "Diamond League", desc: "Reach rating 2500", earned: false },
];

const LOBBY = [
  { id: 1, host: "Lord Blackwood", game: "Chess", mode: "Ranked", players: "1/2", rating: "2100+", waiting: "2m" },
  { id: 2, host: "Lady Ashford", game: "Backgammon", mode: "Friendly", players: "1/2", rating: "Any", waiting: "45s" },
  { id: 3, host: "Sir Pemberton", game: "Mahjong", mode: "Friendly", players: "3/4", rating: "Any", waiting: "5m" },
  { id: 4, host: "Count Velmire", game: "Checkers", mode: "Ranked", players: "1/2", rating: "1800+", waiting: "1m" },
  { id: 5, host: "The Wanderer", game: "Dominoes", mode: "Friendly", players: "2/4", rating: "Any", waiting: "8m" },
];

type Tab = "play" | "leaderboard" | "achievements";

const getRankStyle = (rank: number) => {
  if (rank === 1) return { bg: "bg-yellow-500", text: "text-yellow-900" };
  if (rank === 2) return { bg: "bg-gray-400", text: "text-gray-900" };
  if (rank === 3) return { bg: "bg-amber-700", text: "text-amber-100" };
  return { bg: "bg-transparent border border-amber-800/40", text: "text-amber-600/70" };
};

export default function Index() {
  const [activeTab, setActiveTab] = useState<Tab>("play");
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  return (
    <div className="min-h-screen wood-dark-grain">

      {/* Header */}
      <header className="relative border-b border-amber-800/30" style={{ background: "linear-gradient(180deg, #1a0c04 0%, #2d1b0e 100%)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #c9973a, #e8c16a, #c9973a, transparent)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,151,58,0.4), rgba(201,151,58,0.4), transparent)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4 animate-fade-up">
            <div className="text-4xl animate-float">♟️</div>
            <div>
              <h1 className="font-cinzel font-black text-2xl shimmer-text tracking-widest">THE BOARD ROOM</h1>
              <p className="font-fell italic text-xs text-amber-600/70 tracking-wider">Est. MDCCCLXXXVIII · Classical Games Parlour</p>
            </div>
          </div>

          <div className="flex items-center gap-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="text-right hidden sm:block">
              <div className="font-cinzel text-sm text-amber-400 font-semibold">Lord Blackwood</div>
              <div className="flex items-center gap-1.5 justify-end mt-0.5">
                <div className="online-dot" />
                <span className="font-crimson text-xs text-amber-600/70">Rating: 2341</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl border-2 border-amber-700/50" style={{ background: "linear-gradient(135deg, #5c3317, #3d2010)" }}>
              🎩
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative h-56 sm:h-72 overflow-hidden">
        <img src={HERO_IMAGE} alt="Board games" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,12,4,0.3) 0%, rgba(26,12,4,0.6) 60%, rgba(26,12,4,0.95) 100%)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-center px-6">
          <p className="font-fell italic text-amber-200/90 text-xl sm:text-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Where strategy meets tradition
          </p>
          <div className="gold-divider w-48 mt-3 animate-fade-up" style={{ animationDelay: "0.3s" }} />
          <div className="flex items-center gap-6 mt-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { val: "419", label: "Online Now" },
              { val: "6", label: "Games" },
              { val: "12,847", label: "Members" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-cinzel font-bold text-xl text-gold">{stat.val}</div>
                <div className="font-crimson text-xs text-amber-400/70 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-30 border-b border-amber-800/30" style={{ background: "linear-gradient(180deg, #2d1b0e 0%, #251508 100%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex">
            {([
              { id: "play", label: "Play", icon: "Gamepad2" },
              { id: "leaderboard", label: "Leaderboard", icon: "Trophy" },
              { id: "achievements", label: "Achievements", icon: "Star" },
            ] as { id: Tab; label: string; icon: string }[]).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-cinzel text-sm font-semibold tracking-wider transition-all duration-200 border-b-2 ${
                  activeTab === tab.id
                    ? "text-gold border-amber-500"
                    : "text-amber-700 border-transparent hover:text-amber-500 hover:border-amber-800"
                }`}
              >
                <Icon name={tab.icon as "Trophy"} size={15} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* PLAY TAB */}
        {activeTab === "play" && (
          <div className="space-y-10">

            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="gold-divider flex-1" />
                <h2 className="font-cinzel font-bold text-lg text-gold-light tracking-widest uppercase px-3">Choose Your Game</h2>
                <div className="gold-divider flex-1" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {GAMES.map((game, i) => (
                  <button
                    key={game.id}
                    onClick={() => setSelectedGame(selectedGame === game.id ? null : game.id)}
                    className={`card-wood rounded p-4 text-center transition-all duration-200 animate-fade-up group relative ${
                      selectedGame === game.id ? "animate-pulse-gold ring-2 ring-amber-500" : "hover:border-amber-600/50"
                    }`}
                    style={{ animationDelay: `${i * 0.07}s` }}
                  >
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-200">{game.emoji}</div>
                    <div className="font-cinzel font-bold text-sm text-parchment">{game.name}</div>
                    <div className="font-crimson text-xs text-amber-600/70 mt-1">{game.tag}</div>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      <div className="online-dot" style={{ width: 6, height: 6 }} />
                      <span className="font-crimson text-xs text-green-400/80">{game.online}</span>
                    </div>
                  </button>
                ))}
              </div>

              {selectedGame && (
                <div className="mt-6 card-wood rounded p-6 animate-scale-in">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="font-cinzel font-bold text-xl text-gold">
                        {GAMES.find(g => g.id === selectedGame)?.emoji} {GAMES.find(g => g.id === selectedGame)?.name}
                      </div>
                      <div className="font-crimson text-amber-400/80 mt-1">
                        {GAMES.find(g => g.id === selectedGame)?.players} players · {GAMES.find(g => g.id === selectedGame)?.time}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="btn-gold px-6 py-2.5 rounded text-sm">Quick Match</button>
                      <button className="btn-wood px-6 py-2.5 rounded text-sm">Create Room</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Open Rooms */}
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="gold-divider flex-1" />
                <h2 className="font-cinzel font-bold text-lg text-gold-light tracking-widest uppercase px-3">Open Rooms</h2>
                <div className="gold-divider flex-1" />
              </div>

              <div className="card-wood rounded overflow-hidden">
                <div className="grid grid-cols-5 gap-4 px-5 py-3 border-b border-amber-900/40">
                  {["Host", "Game", "Mode", "Players", ""].map((h, i) => (
                    <div key={i} className="font-cinzel text-xs text-amber-700 uppercase tracking-widest">{h}</div>
                  ))}
                </div>
                {LOBBY.map((room) => (
                  <div
                    key={room.id}
                    className="grid grid-cols-5 gap-4 px-5 py-4 border-b border-amber-900/20 hover:bg-amber-900/10 transition-colors items-center"
                  >
                    <div className="flex items-center gap-2">
                      <div className="online-dot" />
                      <span className="font-crimson text-parchment">{room.host}</span>
                    </div>
                    <div className="font-crimson text-amber-300">{room.game}</div>
                    <div>
                      <span className={`font-cinzel text-xs px-2 py-0.5 rounded-sm ${room.mode === "Ranked" ? "bg-amber-800/40 text-amber-400" : "bg-green-900/30 text-green-400"}`}>
                        {room.mode}
                      </span>
                    </div>
                    <div className="font-crimson text-amber-600/80 text-sm">{room.players}</div>
                    <button className="btn-wood px-4 py-1.5 rounded text-xs w-fit">Join</button>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-center">
                <button className="btn-gold px-8 py-3 rounded font-cinzel text-sm tracking-wider">
                  + Create New Room
                </button>
              </div>
            </div>
          </div>
        )}

        {/* LEADERBOARD TAB */}
        {activeTab === "leaderboard" && (
          <div className="animate-scale-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="gold-divider flex-1" />
              <h2 className="font-cinzel font-bold text-lg text-gold-light tracking-widest uppercase px-3">Hall of Champions</h2>
              <div className="gold-divider flex-1" />
            </div>

            {/* Podium */}
            <div className="flex items-end justify-center gap-4 mb-10">
              {[LEADERBOARD[1], LEADERBOARD[0], LEADERBOARD[2]].map((player, i) => {
                const heights = ["h-28", "h-36", "h-24"];
                const isFirst = player.rank === 1;
                return (
                  <div key={player.rank} className={`flex flex-col items-center ${i === 1 ? "order-2" : i === 0 ? "order-1" : "order-3"}`}>
                    <div className={`text-4xl mb-2 ${isFirst ? "animate-float" : ""}`}>{player.avatar}</div>
                    <div className="font-cinzel font-bold text-sm text-parchment text-center mb-2 max-w-[7rem]">{player.name}</div>
                    <div className={`font-cinzel font-black text-2xl mb-2`}>
                      {player.rank === 1 ? "🥇" : player.rank === 2 ? "🥈" : "🥉"}
                    </div>
                    <div className={`w-28 ${heights[i]} rounded-t flex flex-col items-center justify-end pb-3`}
                      style={{
                        background: player.rank === 1
                          ? "linear-gradient(180deg, #a37820, #7a5a18)"
                          : player.rank === 2
                          ? "linear-gradient(180deg, #9ca3af, #6b7280)"
                          : "linear-gradient(180deg, #b45309, #7c3d0b)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.5)"
                      }}>
                      <div className="font-cinzel font-bold text-lg text-white">{player.rating}</div>
                      <div className="font-crimson text-xs text-white/70">{player.wins} wins</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Full Table */}
            <div className="card-wood rounded overflow-hidden">
              <div className="grid grid-cols-5 gap-4 px-6 py-3 border-b border-amber-900/40">
                {["Rank", "Player", "Rating", "Wins", "Streak"].map((h) => (
                  <div key={h} className="font-cinzel text-xs text-amber-700 uppercase tracking-widest">{h}</div>
                ))}
              </div>
              {LEADERBOARD.map((player, i) => {
                const rankStyle = getRankStyle(player.rank);
                return (
                  <div
                    key={player.rank}
                    className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-amber-900/20 items-center transition-colors hover:bg-amber-900/10 animate-fade-up"
                    style={{ animationDelay: `${i * 0.06}s` }}
                  >
                    <div>
                      <div className={`rank-badge ${rankStyle.bg} ${rankStyle.text}`}>{player.rank}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{player.avatar}</span>
                      <span className="font-crimson text-parchment font-semibold">{player.name}</span>
                    </div>
                    <div className="font-cinzel font-bold text-amber-400">{player.rating}</div>
                    <div className="font-crimson text-amber-300/80">{player.wins.toLocaleString()}</div>
                    <div className="flex items-center gap-1">
                      <span className="text-orange-400">🔥</span>
                      <span className="font-cinzel text-sm text-orange-400 font-bold">{player.streak}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ACHIEVEMENTS TAB */}
        {activeTab === "achievements" && (
          <div className="animate-scale-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-divider flex-1" />
              <h2 className="font-cinzel font-bold text-lg text-gold-light tracking-widest uppercase px-3">Your Achievements</h2>
              <div className="gold-divider flex-1" />
            </div>

            <div className="text-center mb-8">
              <div className="font-cinzel text-4xl font-black text-gold">5 / 9</div>
              <div className="font-crimson text-amber-600/70 text-lg mt-1">Trophies Earned</div>
              <div className="w-64 mx-auto mt-3 h-2 rounded-full bg-amber-900/40 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: "55%", background: "linear-gradient(90deg, #c9973a, #e8c16a)" }} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ACHIEVEMENTS.map((ach, i) => (
                <div
                  key={ach.name}
                  className={`card-wood rounded p-5 flex items-center gap-4 transition-all duration-300 animate-fade-up ${
                    ach.earned ? "opacity-100" : "opacity-40 grayscale"
                  }`}
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <div className="text-4xl shrink-0">{ach.icon}</div>
                  <div>
                    <div className="font-cinzel font-bold text-sm text-parchment flex items-center gap-2">
                      {ach.name}
                      {ach.earned && <span className="text-xs text-green-400">✓</span>}
                    </div>
                    <div className="font-crimson text-sm text-amber-600/70 mt-0.5">{ach.desc}</div>
                  </div>
                  {ach.earned && (
                    <div className="ml-auto shrink-0">
                      <div className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: "0 0 6px rgba(74,222,128,0.6)" }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-amber-900/30 mt-16 py-8 text-center" style={{ background: "linear-gradient(0deg, #0f0703 0%, #1a0c04 100%)" }}>
        <div className="gold-divider w-64 mx-auto mb-6" />
        <div className="font-fell italic text-amber-700/50 text-sm px-6">
          "The game of chess is not merely an idle amusement; several very valuable qualities of the mind are to be acquired."
        </div>
        <div className="font-cinzel text-xs text-amber-800/40 mt-3 tracking-widest">— BENJAMIN FRANKLIN, 1779</div>
      </footer>
    </div>
  );
}