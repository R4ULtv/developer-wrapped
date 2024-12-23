import Image from "next/image";
import logo from "@/public/logo.png";

import { GithubIcon, JavascriptIcon, StripeIcon } from "@/utils/icons";
import { GithubContributionGraph } from "@/utils/graph";

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
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import { AnimatedNumber } from "@/components/animation/animated-number";
import { Tilt } from "@/components/animation/tilt";
import Link from "next/link";

export default function RecapPage() {
  return (
    <div className="w-screen min-h-[100svh] p-2 md:p-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 auto-rows-fr relative selection:bg-red-400/25">
      <Tilt className="col-span-2 row-span-2 flex flex-col items-center justify-around gap-3 p-6 border border-zinc-800 bg-zinc-900 shadow-xl shadow-red-500/15 rounded-3xl">
        <div className="absolute bottom-6 right-6 blur-3xl bg-red-500 size-16" />
        <div className="absolute bottom-6 left-6 blur-3xl bg-red-500 size-16" />

        <div className="relative">
          <GithubIcon className="size-32 text-red-500" />
          <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 blur-3xl bg-red-500/50 size-32" />
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-9xl font-bold text-zinc-50 text-center">
            <AnimatedNumber value={217} />
          </p>
          <p className="text-xl text-zinc-400 font-mono">
            days of contributions
          </p>
        </div>
      </Tilt>
      <div className="col-span-2 flex flex-col justify-center gap-3 p-6 border border-zinc-800 bg-zinc-900 shadow-inner shadow-zinc-800 rounded-3xl relative overflow-hidden">
        <CalendarDateRangeIcon className="absolute bottom-6 right-6 size-16 text-red-500" />
        <div className="absolute bottom-6 right-6 blur-3xl bg-red-500 size-16" />
        <div className="absolute top-6 left-6 blur-3xl bg-red-500 size-16" />

        <p className="text-7xl font-bold text-zinc-50">February</p>
        <p className="text-xl text-zinc-400 font-mono">most active month</p>
      </div>
      <div className="col-span-2 flex flex-col justify-center gap-3 p-6 border border-zinc-800 bg-zinc-900 shadow-inner shadow-zinc-800 rounded-3xl relative overflow-hidden">
        <CalendarIcon className="absolute top-6 right-6 size-16 text-red-500" />
        <div className="absolute top-6 right-6 blur-3xl bg-red-500 size-16" />
        <div className="absolute bottom-6 left-6 blur-3xl bg-red-500 size-16" />

        <p className="text-7xl font-bold text-zinc-50">Friday</p>
        <p className="text-xl text-zinc-400 font-mono">most active day</p>
      </div>
      <div className="col-span-2 row-span-3 flex flex-col items-center justify-between gap-3 p-6 border border-zinc-800 bg-zinc-900 shadow-inner shadow-zinc-800 rounded-3xl relative overflow-hidden">
        <div className="absolute bottom-6 right-6 blur-3xl bg-red-500 size-16" />
        <div className="absolute bottom-6 left-6 blur-3xl bg-red-500 size-16" />

        <div className="relative flex items-center h-full">
          <StripeIcon className="size-32 text-red-500" />
          <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 blur-3xl bg-red-500/50 size-32" />
        </div>

        <div className="flex flex-col gap-3 shrink-0">
          <p className="text-2xl font-bold text-zinc-50">
            0 transactions with Stripe
          </p>
          <p className="text-lg text-zinc-400 font-mono mt-4">
            In the past year I made over{" "}
            <span className="font-semibold">0$</span> in payments with Stripe.
            Isn't that amazing?
          </p>
          <div className="flex items-center gap-3 mt-8 font-mono">
            <div className="flex items-center justify-center gap-1.5 text-base text-zinc-400 ">
              <CurrencyDollarIcon className="size-6" />
              “Broke of the Year”
            </div>
            <div className="flex items-center justify-center gap-1.5 text-base text-zinc-400 ">
              <BuildingLibraryIcon className="size-6" />
              “Profitless Pro”
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between p-6 border border-zinc-800 bg-zinc-900 shadow-inner shadow-zinc-800 rounded-3xl relative overflow-hidden">
        <JavascriptIcon className="size-16 text-red-500" />
        <div className="absolute top-6 right-1/2 translate-x-1/2 blur-3xl bg-red-500 size-16" />
        <div className="text-center">
          <p className="text-7xl font-bold text-zinc-50">Js</p>
          <p className="text-xl text-zinc-400 font-mono">most used lang</p>
        </div>
      </div>
      <div className="order-first md:order-none col-span-2 row-span-2 flex flex-col items-center justify-center gap-8 p-6">
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
          <p className="text-center">Recap</p>
        </div>
        <div className="border border-zinc-800  px-4 py-1.5 rounded-full text-zinc-50 select-none">
          2024
        </div>
      </div>
      <div className="flex flex-col items-center justify-between p-6 border border-zinc-800 bg-zinc-900 shadow-inner shadow-zinc-800 rounded-3xl relative overflow-hidden">
        <GlobeAltIcon className="size-16 text-red-500" />
        <div className="absolute top-6 right-1/2 translate-x-1/2 blur-3xl bg-red-500 size-16" />
        <div className="text-center">
          <p className="text-7xl font-bold text-zinc-50">
            <AnimatedNumber value={5} />
          </p>
          <p className="text-xl text-zinc-400 font-mono">active website</p>
        </div>
      </div>
      <div className="col-span-2 flex flex-col justify-between p-6 border border-zinc-800 bg-zinc-900 shadow-inner shadow-zinc-800 rounded-3xl relative overflow-hidden">
        <MapIcon className="absolute top-6 right-6 size-16 text-red-500" />
        <div className="absolute top-6 right-6 blur-3xl bg-red-500 size-16" />
        <div className="absolute bottom-6 left-6 blur-3xl bg-red-500 size-16" />

        <p className="text-9xl font-bold text-zinc-50">
          <AnimatedNumber value={8} />
        </p>
        <p className="text-xl text-zinc-400 font-mono">
          new public repositories
        </p>
      </div>
      <div className="flex flex-col items-center justify-between p-6 border border-zinc-800 bg-zinc-900 shadow-inner shadow-zinc-800 rounded-3xl relative overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 blur-3xl bg-red-500 size-16" />
        <GithubContributionGraph />
      </div>
      <div className="flex flex-col items-center justify-between p-6 border border-zinc-800 bg-zinc-900 shadow-inner shadow-zinc-800 rounded-3xl relative overflow-hidden">
        <EyeIcon className="size-16 text-red-500" />
        <div className="absolute top-6 right-1/2 translate-x-1/2 blur-3xl bg-red-500 size-16" />
        <div className="text-center">
          <p className="text-7xl font-bold text-zinc-50">
            <AnimatedNumber value={39} />k
          </p>
          <p className="text-xl text-zinc-400 font-mono">visitors</p>
        </div>
      </div>

      <div className="col-span-2 flex flex-col justify-between p-6 border border-zinc-800 bg-zinc-900 shadow-inner shadow-zinc-800 rounded-3xl relative overflow-hidden">
        <StarIcon className="absolute top-6 right-6 size-16 text-red-500" />
        <div className="absolute top-6 right-6 blur-3xl bg-red-500 size-16" />
        <div className="absolute bottom-6 left-6 blur-3xl bg-red-500 size-16" />

        <p className="text-9xl font-bold text-zinc-50">
          <AnimatedNumber value={6} />
        </p>
        <p className="text-xl text-zinc-400 font-mono">
          stars earned in the last year
        </p>
      </div>
      <div className="col-span-2 flex flex-col justify-between p-6 border border-zinc-800 bg-zinc-900 shadow-inner shadow-zinc-800 rounded-3xl relative overflow-hidden">
        <ChatBubbleLeftEllipsisIcon className="absolute bottom-6 right-6 size-16 text-red-500" />
        <div className="absolute bottom-6 right-6 blur-3xl bg-red-500 size-16" />
        <div className="absolute top-6 left-6 blur-3xl bg-red-500 size-16" />

        <p className="text-9xl font-bold text-zinc-50">
          <AnimatedNumber value={1973} />
        </p>
        <p className="text-xl text-zinc-400 font-mono">contributions</p>
      </div>
      <div className="col-span-2 flex flex-col justify-between p-6 border border-zinc-800 bg-zinc-900 shadow-inner shadow-zinc-800 rounded-3xl relative overflow-hidden">
        <DocumentTextIcon className="absolute top-6 right-6 size-16 text-red-500" />
        <div className="absolute top-6 right-6 blur-3xl bg-red-500 size-16" />
        <div className="absolute bottom-6 left-6 blur-3xl bg-red-500 size-16" />

        <p className="text-9xl font-bold text-zinc-50">
          <AnimatedNumber value={17} />
        </p>
        <p className="text-xl text-zinc-400 font-mono">new blog posts</p>
      </div>
      <div className="col-span-2 flex flex-col justify-between p-6 border border-zinc-800 bg-zinc-900 shadow-inner shadow-zinc-800 rounded-3xl relative overflow-hidden">
        <UserGroupIcon className="absolute bottom-6 right-6 size-16 text-red-500" />
        <div className="absolute bottom-6 right-6 blur-3xl bg-red-500 size-16" />
        <div className="absolute top-6 left-6 blur-3xl bg-red-500 size-16" />

        <p className="text-9xl font-bold text-zinc-50">
          <AnimatedNumber value={3261} />
        </p>
        <p className="text-xl text-zinc-400 font-mono">total blog views</p>
      </div>
    </div>
  );
}
