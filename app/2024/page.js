import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

import { GithubIcon, JavascriptIcon, StripeIcon } from "@/utils/icons";
import { GithubContributionGraph } from "@/utils/graph";

import { cn } from "@/lib/utils";
import { Tilt } from "@/components/animation/tilt";
import { AnimatedNumber } from "@/components/animation/animated-number";
import { TextLoop } from "@/components/animation/text-loop";
import { TextEffect } from "@/components/animation/text-effect";

import {
  BuildingLibraryIcon,
  CalendarDateRangeIcon,
  CalendarIcon,
  ChatBubbleLeftEllipsisIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  EyeIcon,
  GlobeAltIcon,
  MapIcon,
  StarIcon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const Card = ({ className, children }) => (
  <Tilt
    className={cn(
      className,
      "p-6 border border-zinc-800 bg-zinc-900/50 backdrop-blur-3xl rounded-3xl relative overflow-hidden shadow-2xl hover:shadow-red-500/15 duration-300 transition-all ease-out"
    )}
  >
    {children}
  </Tilt>
);

export default function WrappedPage() {
  return (
    <div className="w-full min-h-[100dvh] p-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 auto-rows-fr relative selection:bg-red-400/25">
      <Card className="col-span-2 row-span-2 flex flex-col justify-around items-center gap-3">
        <div className="absolute bottom-6 right-6 blur-3xl bg-red-500 size-16" />
        <div className="absolute bottom-6 left-6 blur-3xl bg-red-500 size-16" />

        <div className="relative">
          <GithubIcon className="z-10 size-32 text-red-500" />
          <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 blur-3xl bg-red-500/50 size-32" />
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-9xl font-bold text-zinc-50 text-center">
            <AnimatedNumber value={217} />
          </p>
          <TextEffect
            per="char"
            preset="fade"
            delay={0.2}
            className="text-xl text-zinc-400 font-mono"
          >
            days of contributions
          </TextEffect>
        </div>
      </Card>
      <Card className="col-span-2 flex flex-col justify-center gap-3">
        <CalendarDateRangeIcon className="z-10 absolute bottom-6 right-6 size-16 text-red-500" />
        <div className="absolute bottom-6 right-6 blur-3xl bg-red-500 size-16" />
        <div className="absolute top-6 left-6 blur-3xl bg-red-500 size-16" />

        <TextEffect
          per="word"
          preset="scale"
          delay={0.2}
          className="text-7xl font-bold text-zinc-50"
        >
          February
        </TextEffect>
        <TextEffect
          per="char"
          preset="fade"
          delay={0.2}
          className="text-xl text-zinc-400 font-mono"
        >
          most active month
        </TextEffect>
      </Card>
      <Card className="col-span-2 flex flex-col justify-center gap-3">
        <CalendarIcon className="z-10 absolute top-6 right-6 size-16 text-red-500" />
        <div className="absolute top-6 right-6 blur-3xl bg-red-500 size-16" />
        <div className="absolute bottom-6 left-6 blur-3xl bg-red-500 size-16" />

        <TextEffect
          per="word"
          preset="scale"
          className="text-7xl font-bold text-zinc-50"
        >
          Friday
        </TextEffect>
        <TextEffect
          per="char"
          preset="fade"
          delay={0.2}
          className="text-xl text-zinc-400 font-mono"
        >
          most active day
        </TextEffect>
      </Card>
      <Card className="col-span-2 row-span-3 flex flex-col items-center justify-between gap-3">
        <div className="absolute bottom-6 right-6 blur-3xl bg-red-500 size-16" />
        <div className="absolute bottom-6 left-6 blur-3xl bg-red-500 size-16" />

        <div className="relative flex items-center h-full">
          <StripeIcon className="z-10 size-32 text-zinc-50 bg-red-500 p-6 rounded-3xl" />
          <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 blur-3xl bg-red-500/50 size-32" />
        </div>

        <div className="flex flex-col gap-3 shrink-0">
          <TextEffect
            per="word"
            as="p"
            preset="scale"
            className="text-2xl font-bold text-zinc-50"
          >
            0 transactions with Stripe
          </TextEffect>
          <TextEffect
            per="word"
            as="p"
            preset="slide"
            className="text-lg text-zinc-400 font-mono mt-4"
          >
            In the past year I made over 0$ in payments with Stripe. Isn't that
            amazing?
          </TextEffect>
          <div className="flex items-center gap-3 mt-8 font-mono">
            <TextLoop interval={3}>
              <div className="flex items-center justify-center gap-1.5 text-base text-zinc-400 ">
                <CurrencyDollarIcon className="z-10 size-6" />
                “Broke of the Year”
              </div>
              <div className="flex items-center justify-center gap-1.5 text-base text-zinc-400 ">
                <BuildingLibraryIcon className="z-10 size-6" />
                “Profitless Pro”
              </div>
              <div className="flex items-center justify-center gap-1.5 text-base text-zinc-400 ">
                <UserCircleIcon className="z-10 size-6" />
                “Unpaid Contributor”
              </div>
            </TextLoop>
          </div>
        </div>
      </Card>

      <Card className="flex flex-col items-center justify-between">
        <JavascriptIcon className="z-10 size-16 text-red-500" />
        <div className="absolute top-6 right-1/2 translate-x-1/2 blur-3xl bg-red-500 size-16" />
        <div className="text-center">
          <TextEffect
            per="word"
            preset="scale"
            className="text-7xl font-bold text-zinc-50"
          >
            Js
          </TextEffect>
          <TextEffect
            per="char"
            preset="fade"
            delay={0.2}
            className="text-xl text-zinc-400 font-mono"
          >
            most used lang
          </TextEffect>
        </div>
      </Card>

      <div className="order-first md:order-none col-span-2 row-span-2 flex flex-col items-center justify-center gap-8 p-6 relative">
        <Link href="/">
          <Image
            src={logo}
            width={64}
            height={64}
            alt="Raul Carini Logo"
            placeholder="blur"
            className="rounded-full size-16"
          />
        </Link>
        <div className="flex flex-col items-center justify-center gap-2 text-6xl text-transparent bg-clip-text bg-gradient-to-br from-25% from-zinc-50 to-zinc-400 font-black tracking-wide">
          <p className="text-center">Developer</p>
          <p className="text-center">Wrapped</p>
        </div>
        <a
          target="_blank"
          href="https://github.com/R4ULtv/developer-wrapped"
          className="border border-zinc-800 px-4 py-1.5 rounded-full text-zinc-50 select-none hover:scale-105 shadow-inner hover:shadow-zinc-800/50 duration-300 transition-all ease-out"
        >
          2024
        </a>
      </div>
      
      <Card className="flex flex-col items-center justify-between">
        <GlobeAltIcon className="z-10 size-16 text-red-500" />
        <div className="absolute top-6 right-1/2 translate-x-1/2 blur-3xl bg-red-500 size-16" />
        <div className="text-center">
          <p className="text-7xl font-bold text-zinc-50">
            <AnimatedNumber value={5} />
          </p>
          <TextEffect
            per="char"
            preset="fade"
            delay={0.2}
            className="text-xl text-zinc-400 font-mono"
          >
            active website
          </TextEffect>
        </div>
      </Card>
      <Card className="col-span-2 flex flex-col justify-between">
        <MapIcon className="z-10 absolute top-6 right-6 size-16 text-red-500" />
        <div className="absolute top-6 right-6 blur-3xl bg-red-500 size-16" />
        <div className="absolute bottom-6 left-6 blur-3xl bg-red-500 size-16" />

        <p className="text-9xl font-bold text-zinc-50">
          <AnimatedNumber value={8} />
        </p>
        <TextEffect
          per="char"
          preset="fade"
          delay={0.2}
          className="text-xl text-zinc-400 font-mono"
        >
          new public repositories
        </TextEffect>
      </Card>
      <Card className="flex flex-col items-center justify-between">
        <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 blur-3xl bg-red-500 size-16" />
        <GithubContributionGraph />
      </Card>
      <Card className="flex flex-col items-center justify-between">
        <EyeIcon className="z-10 size-16 text-red-500" />
        <div className="absolute top-6 right-1/2 translate-x-1/2 blur-3xl bg-red-500 size-16" />
        <div className="text-center">
          <p className="text-7xl font-bold text-zinc-50">
            <AnimatedNumber value={39} />k
          </p>
          <TextEffect
            per="char"
            preset="fade"
            delay={0.2}
            className="text-xl text-zinc-400 font-mono"
          >
            visitors
          </TextEffect>
        </div>
      </Card>

      <Card className="col-span-2 flex flex-col justify-between">
        <StarIcon className="z-10 absolute top-6 right-6 size-16 text-red-500" />
        <div className="absolute top-6 right-6 blur-3xl bg-red-500 size-16" />
        <div className="absolute bottom-6 left-6 blur-3xl bg-red-500 size-16" />

        <p className="text-9xl font-bold text-zinc-50">
          <AnimatedNumber value={6} />
        </p>
        <TextEffect
          per="char"
          preset="fade"
          delay={0.2}
          className="text-xl text-zinc-400 font-mono"
        >
          stars earned in the last year
        </TextEffect>
      </Card>
      <Card className="col-span-2 flex flex-col justify-between">
        <ChatBubbleLeftEllipsisIcon className="z-10 absolute bottom-6 right-6 size-16 text-red-500" />
        <div className="absolute bottom-6 right-6 blur-3xl bg-red-500 size-16" />
        <div className="absolute top-6 left-6 blur-3xl bg-red-500 size-16" />

        <p className="text-9xl font-bold text-zinc-50">
          <AnimatedNumber value={1973} />
        </p>
        <TextEffect
          per="char"
          preset="fade"
          delay={0.2}
          className="text-xl text-zinc-400 font-mono"
        >
          contributions
        </TextEffect>
      </Card>
      <Card className="col-span-2 flex flex-col justify-between">
        <DocumentTextIcon className="z-10 absolute top-6 right-6 size-16 text-red-500" />
        <div className="absolute top-6 right-6 blur-3xl bg-red-500 size-16" />
        <div className="absolute bottom-6 left-6 blur-3xl bg-red-500 size-16" />

        <p className="text-9xl font-bold text-zinc-50">
          <AnimatedNumber value={17} />
        </p>
        <TextEffect
          per="char"
          preset="fade"
          delay={0.2}
          className="text-xl text-zinc-400 font-mono"
        >
          new blog posts
        </TextEffect>
      </Card>
      <Card className="col-span-2 flex flex-col justify-between">
        <UserGroupIcon className="z-10 absolute bottom-6 right-6 size-16 text-red-500" />
        <div className="absolute bottom-6 right-6 blur-3xl bg-red-500 size-16" />
        <div className="absolute top-6 left-6 blur-3xl bg-red-500 size-16" />

        <p className="text-9xl font-bold text-zinc-50">
          <AnimatedNumber value={3261} />
        </p>
        <TextEffect
          per="char"
          preset="fade"
          delay={0.2}
          className="text-xl text-zinc-400 font-mono"
        >
          total blog views
        </TextEffect>
      </Card>
    </div>
  );
}
