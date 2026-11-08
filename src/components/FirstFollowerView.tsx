import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Copy, Check, Mail, Quote, ExternalLink, Sparkles } from "lucide-react";

interface FirstFollowerViewProps {
  isDarkMode: boolean;
  onBackToHome?: () => void;
}

export function FirstFollowerView({ isDarkMode, onBackToHome }: FirstFollowerViewProps) {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <motion.div
      key="first-follower-view"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-3xl mx-auto space-y-8 py-4 md:py-6"
    >
      {/* Header & Article Metadata */}
      <div className={`border-b pb-6 space-y-4 ${isDarkMode ? "border-[#27272a]" : "border-[#e7e5e4]"}`}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className={`text-[10px] font-mono uppercase tracking-[0.25em] font-semibold ${
            isDarkMode ? "text-[#a1a1aa]" : "text-[#78716c]"
          }`}>
            Philosophy &amp; Leadership
          </span>
          <a
            href="https://impactdesignexperiences.substack.com/p/first-follower"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-medium underline underline-offset-4 transition-colors ${
              isDarkMode ? "text-[#fafaf9] hover:text-[#d4d4d8]" : "text-[#1c1917] hover:text-[#57534e]"
            }`}
          >
            <span>Read on Substack</span>
            <ExternalLink size={12} />
          </a>
        </div>

        <div className="space-y-2">
          <h1 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.15] ${
            isDarkMode ? "text-[#fafaf9]" : "text-[#1c1917]"
          }`}>
            A first follower?
          </h1>
          <p className={`font-serif italic text-lg sm:text-xl font-light ${
            isDarkMode ? "text-[#a1a1aa]" : "text-[#57534e]"
          }`}>
            First Follower transforms the lone nut into a true leader
          </p>
        </div>

        <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono pt-2 ${
          isDarkMode ? "text-[#71717a]" : "text-[#a8a29e]"
        }`}>
          <span className={`font-semibold ${isDarkMode ? "text-[#e4e4e7]" : "text-[#292524]"}`}>
            Sagar Tandon
          </span>
          <span>•</span>
          <span>Impact Design (+) EXperiences &amp; Conscious Futurist</span>
          <span>•</span>
          <span>Jul 22, 2023</span>
        </div>
      </div>

      {/* Derek Sivers Epigraph Callout */}
      <div className={`border-l-2 p-5 sm:p-6 space-y-3 rounded-r-sm transition-colors ${
        isDarkMode 
          ? "border-[#fafaf9] bg-[#1c1917]/70 text-[#e4e4e7]" 
          : "border-[#1c1917] bg-[#f5f5f4]/80 text-[#292524]"
      }`}>
        <div className="flex items-center gap-2">
          <Quote size={18} className={isDarkMode ? "text-[#fafaf9]" : "text-[#1c1917]"} />
          <span className={`text-[10px] font-mono uppercase tracking-widest font-bold ${
            isDarkMode ? "text-[#fafaf9]" : "text-[#1c1917]"
          }`}>
            Derek Sivers · TED Conference
          </span>
        </div>
        <p className="font-serif italic text-sm sm:text-base leading-relaxed">
          "The first follower is what transforms a lone nut into a leader. There is no movement without the first follower. If you really care about starting a movement, have the courage to follow and show others how to follow."
        </p>
      </div>

      {/* Main Essay Body */}
      <article className={`space-y-6 text-sm sm:text-base leading-relaxed font-serif font-light ${
        isDarkMode ? "text-[#d4d4d8]" : "text-[#292524]"
      }`}>
        <p>
          In our society, we are captivated by the stories of trailblazers, visionaries, and pioneers who dare to embark on extraordinary journeys as entrepreneurs, founders, and initiative-takers. These lone nuts, just like you and me, are driven by an unyielding passion and an unwavering determination to bring their transformative ideas to life, with the potential to change the world for the better.
        </p>

        <p>
          While we rightfully receive admiration and recognition, we tend to overlook an essential group of leaders who play a pivotal role in turning these lone nuts' dreams into reality — the <strong className={`font-semibold ${isDarkMode ? "text-[#fafaf9]" : "text-[#1c1917]"}`}>First Followers</strong>.
        </p>

        <p>
          A <strong className={`font-semibold ${isDarkMode ? "text-[#fafaf9]" : "text-[#1c1917]"}`}>First Follower</strong> is someone who possesses unwavering faith in the lone nut's mission from the very beginning. They step forward to support and believe in the vision when nobody else does. Their commitment and dedication are unwavering, as they see the potential of the lone nut's idea even before it gains widespread recognition. First Followers understand the cause's value and its positive impact on society, and they align themselves with the lone nut's purpose.
        </p>

        <p>
          The role of a First Follower goes far beyond merely providing support; they are instrumental in starting a movement. Their actions create a ripple effect that encourages others to join in. First Followers serve as role models, demonstrating that belief in the lone nut's vision is justified and transformative. By standing with the lone nut, they dispel doubts and skepticism, inspiring more individuals to come forward and lend their support.
        </p>

        {/* Highlighted Sivers Lessons Card */}
        <div className={`border p-6 sm:p-7 space-y-4 rounded-sm transition-colors ${
          isDarkMode 
            ? "border-[#27272a] bg-[#141211]" 
            : "border-[#e7e5e4] bg-white"
        }`}>
          <div className="flex items-center gap-2 pb-2 border-b border-inherit">
            <Sparkles size={16} className={isDarkMode ? "text-[#fafaf9]" : "text-[#1c1917]"} />
            <span className={`text-[11px] font-mono uppercase tracking-widest font-bold ${
              isDarkMode ? "text-[#fafaf9]" : "text-[#1c1917]"
            }`}>
              Core Insights on Starting a Movement
            </span>
          </div>

          <ul className="space-y-3.5 text-xs sm:text-sm font-sans">
            <li className="flex items-start gap-2.5">
              <span className={`font-mono text-xs font-bold mt-0.5 ${isDarkMode ? "text-[#fafaf9]" : "text-[#1c1917]"}`}>
                01.
              </span>
              <div>
                <strong className={`font-semibold ${isDarkMode ? "text-[#fafaf9]" : "text-[#1c1917]"}`}>
                  A movement cannot exist without the First Follower:
                </strong>{" "}
                While leaders are often glorified, it is the courage and dedication of the first follower that ignites the momentum and draws others into the cause.
              </div>
            </li>

            <li className="flex items-start gap-2.5">
              <span className={`font-mono text-xs font-bold mt-0.5 ${isDarkMode ? "text-[#fafaf9]" : "text-[#1c1917]"}`}>
                02.
              </span>
              <div>
                <strong className={`font-semibold ${isDarkMode ? "text-[#fafaf9]" : "text-[#1c1917]"}`}>
                  Not everyone needs to be a lone nut:
                </strong>{" "}
                Effective movements require a mix of lone nuts and First Followers. Each role plays a crucial part in driving change and achieving the movement's goals.
              </div>
            </li>

            <li className="flex items-start gap-2.5">
              <span className={`font-mono text-xs font-bold mt-0.5 ${isDarkMode ? "text-[#fafaf9]" : "text-[#1c1917]"}`}>
                03.
              </span>
              <div>
                <strong className={`font-semibold ${isDarkMode ? "text-[#fafaf9]" : "text-[#1c1917]"}`}>
                  The most impactful contribution:
                </strong>{" "}
                If you genuinely care about a cause, the most impactful way to contribute is by being a courageous First Follower. By stepping forward and demonstrating your belief in the lone nut's vision, you inspire others to do the same.
              </div>
            </li>

            <li className="flex items-start gap-2.5">
              <span className={`font-mono text-xs font-bold mt-0.5 ${isDarkMode ? "text-[#fafaf9]" : "text-[#1c1917]"}`}>
                04.
              </span>
              <div>
                <strong className={`font-semibold ${isDarkMode ? "text-[#fafaf9]" : "text-[#1c1917]"}`}>
                  Catalyzing chain reactions:
                </strong>{" "}
                When you encounter a lone nut making a positive impact, don't hesitate to be the first person to stand up and join in. Your action can spark a chain reaction, bringing more people together and amplifying the lone nut's efforts.
              </div>
            </li>
          </ul>
        </div>

        <p>
          Moreover, First Followers not only support the lone nut but also help nurture other followers as equals. They embrace collaboration, creating a sense of unity and community within the movement. In doing so, they foster an environment where everyone feels valued and heard, further fueling the momentum and growth of the cause. Their selflessness in guiding and empowering others sets the foundation for a sustainable and successful movement.
        </p>

        <p>
          First Followers also serve as a crucial support system for the lone nut. They act as advisors, confidants, mentors, coaches, and sounding boards, offering valuable insights and feedback. The lone nut's journey can be challenging and lonely, but the First Follower's presence provides invaluable emotional support, driving the leader to push forward despite obstacles.
        </p>

        <p>
          Furthermore, First Followers often become the movement's first investors and founding members. They invest not just financially but also with their time, effort, and passion. Their belief in the lone nut's mission leads them to commit to the cause wholeheartedly, making it easier for others to follow suit.
        </p>

        <p>
          It is time we recognize the vital role of First Followers in shaping movements and transforming lone nuts into leaders. Their contribution is immeasurable, and without them, many revolutionary ideas may never see the light of day. The lone nut may receive the lion's share of attention, but it is the First Follower who truly sets the wheels of change in motion.
        </p>

        <p>
          So, if you find yourself in the presence of a lone nut, consider becoming a First Follower. Embrace the vision, be the catalyst for change, and help turn an idea into a movement that can impact the world positively. Together, let us celebrate the unsung heroes — the First Followers — who stand beside the lone nut and drive progress for the betterment of all.
        </p>
      </article>

      {/* Personal Reflection Box */}
      <div className={`border p-6 sm:p-8 space-y-4 rounded-sm transition-colors ${
        isDarkMode 
          ? "border-[#3f3f46] bg-[#1c1917]/90 text-[#fafaf9]" 
          : "border-[#d6d3d1] bg-white text-[#1c1917]"
      }`}>
        <span className={`text-[10px] font-mono uppercase tracking-[0.25em] block border-b pb-2 font-semibold ${
          isDarkMode ? "text-[#a1a1aa] border-[#27272a]" : "text-[#78716c] border-[#e7e5e4]"
        }`}>
          Personal Reflection · Sagar Tandon
        </span>

        <p className="font-serif text-sm sm:text-base leading-relaxed">
          "I am a First Follower of conscious leaders, 'lone nuts' — fund managers, entrepreneurs, intrapreneurs, and venture builders. It took me a while to realize that I am better placed as a First Follower and as a servant leader of conscious leaders, 'lone nuts.'
        </p>

        <p className="font-serif text-sm sm:text-base leading-relaxed">
          Servant leadership and First Follower leadership are closely related in their core principles, as both leadership styles prioritize the well-being of the team or followers and focus on fostering a collaborative and supportive environment."
        </p>

        <div className={`pt-4 border-t ${isDarkMode ? "border-[#27272a]" : "border-[#e7e5e4]"} space-y-3`}>
          <p className="text-xs sm:text-sm font-sans font-medium">
            How about you? Are you a First Follower or a lone nut?
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => handleCopyEmail("sagar@firstfollowers.co")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 border text-xs font-mono font-medium rounded-sm transition-all cursor-pointer ${
                isDarkMode 
                  ? "border-[#3f3f46] bg-[#27272a] text-[#fafaf9] hover:bg-[#3f3f46]" 
                  : "border-[#d6d3d1] bg-white text-[#1c1917] hover:bg-[#f5f5f4]"
              }`}
            >
              {copiedEmail === "sagar@firstfollowers.co" ? <Check size={12} /> : <Copy size={12} />}
              <span>sagar@firstfollowers.co</span>
            </button>

            <a
              href="mailto:sagar@idexaccelerator.com"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 border text-xs font-mono font-medium rounded-sm transition-all ${
                isDarkMode 
                  ? "border-[#3f3f46] bg-[#27272a] text-[#fafaf9] hover:bg-[#3f3f46]" 
                  : "border-[#d6d3d1] bg-white text-[#1c1917] hover:bg-[#f5f5f4]"
              }`}
            >
              <Mail size={12} />
              <span>sagar@idexaccelerator.com</span>
            </a>

            <a
              href="https://firstfollowers.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider rounded-sm transition-all ${
                isDarkMode 
                  ? "bg-[#fafaf9] text-[#0c0a09] hover:bg-[#d4d4d8]" 
                  : "bg-[#1c1917] text-[#fafaf9] hover:bg-[#292524]"
              }`}
            >
              <span>Subscribe on Substack</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="flex justify-between items-center pt-4">
        {onBackToHome && (
          <button
            onClick={onBackToHome}
            className={`text-xs font-mono font-semibold uppercase tracking-widest cursor-pointer underline underline-offset-4 transition-colors ${
              isDarkMode ? "text-[#a1a1aa] hover:text-[#fafaf9]" : "text-[#78716c] hover:text-[#1c1917]"
            }`}
          >
            ← Back to Home
          </button>
        )}
        <a
          href="https://firstfollowers.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xs font-mono font-semibold uppercase tracking-widest inline-flex items-center gap-1 transition-colors ${
            isDarkMode ? "text-[#a1a1aa] hover:text-[#fafaf9]" : "text-[#78716c] hover:text-[#1c1917]"
          }`}
        >
          <span>First Followers Substack</span>
          <ArrowUpRight size={12} />
        </a>
      </div>
    </motion.div>
  );
}
