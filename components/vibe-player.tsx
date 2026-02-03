"use client"

import { useState } from "react"
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX,
  Radio,
  Disc3,
  Waves
} from "lucide-react"

const tracks = [
  { id: 1, title: "Midnight Coding", artist: "Lo-Fi Beats", duration: "3:42" },
  { id: 2, title: "Deep Focus", artist: "Ambient Waves", duration: "4:15" },
  { id: 3, title: "Neural Network", artist: "Synthwave", duration: "3:58" },
  { id: 4, title: "Coffee & Code", artist: "Jazz Hop", duration: "4:31" },
]

export function VibePlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const track = tracks[currentTrack]

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length)
  }

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length)
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl">
      <div className="glass-card glow-border rounded-2xl overflow-hidden transition-all duration-300">
        {/* Expanded track list */}
        {isExpanded && (
          <div className="p-4 border-b border-[#00F5FF]/10">
            <div className="flex items-center gap-2 mb-3">
              <Radio className="w-4 h-4 text-[#00F5FF]" />
              <span className="text-sm font-mono text-[#00F5FF]">Vibe Station</span>
            </div>
            <div className="space-y-2">
              {tracks.map((t, index) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setCurrentTrack(index)
                    setIsPlaying(true)
                  }}
                  className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                    index === currentTrack 
                      ? "bg-[#00F5FF]/20 text-[#00F5FF]" 
                      : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {index === currentTrack && isPlaying ? (
                      <Waves className="w-4 h-4 animate-pulse" />
                    ) : (
                      <Disc3 className="w-4 h-4" />
                    )}
                    <div className="text-left">
                      <p className="text-sm font-medium">{t.title}</p>
                      <p className="text-xs opacity-70">{t.artist}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono">{t.duration}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main player controls */}
        <div className="p-4">
          <div className="flex items-center gap-4">
            {/* Album art / visualizer */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-12 h-12 rounded-lg bg-[#00F5FF]/10 flex items-center justify-center shrink-0 hover:bg-[#00F5FF]/20 transition-colors"
              aria-label={isExpanded ? "Collapse playlist" : "Expand playlist"}
            >
              {isPlaying ? (
                <Waves className="w-6 h-6 text-[#00F5FF] animate-pulse" />
              ) : (
                <Disc3 className="w-6 h-6 text-[#00F5FF]" />
              )}
            </button>

            {/* Track info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{track.title}</p>
              <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
            </div>

            {/* Playback controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={prevTrack}
                className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                aria-label="Previous track"
              >
                <SkipBack className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
              
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 rounded-full bg-[#00F5FF] text-[#141b2d] hover:bg-[#00F5FF]/90 transition-colors pulse-glow"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" />
                )}
              </button>
              
              <button
                onClick={nextTrack}
                className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                aria-label="Next track"
              >
                <SkipForward className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
            </div>

            {/* Volume control */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#00F5FF]" />
              )}
            </button>
          </div>

          {/* Progress bar */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs font-mono text-muted-foreground">1:24</span>
            <div className="flex-1 h-1 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#00F5FF] rounded-full transition-all duration-300"
                style={{ width: isPlaying ? "35%" : "0%" }}
              />
            </div>
            <span className="text-xs font-mono text-muted-foreground">{track.duration}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
