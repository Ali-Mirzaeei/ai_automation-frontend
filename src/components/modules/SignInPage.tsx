import React from "react";
import GoogleIcon from "../atom/icons/GoogleIcon";
import GithubIcon from "../atom/icons/GithubIcon";

const SignInPage = () => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <h1 className="text-3xl font-bold text-center text-slate-100 mb-8">
        Sign in to Flowzy AI
      </h1>

      <div className="space-y-4 mb-6">
        <button className="w-full flex items-center justify-center gap-3 bg-white text-slate-800 font-semibold py-3 px-6 rounded-full hover:bg-slate-200 transition-colors duration-300 text-md">
          <GoogleIcon />
          <span>Sign in with Google</span>
        </button>
        <button className="w-full flex items-center justify-center gap-3 bg-slate-800 text-white font-semibold py-3 px-6 rounded-full hover:bg-slate-700 border border-slate-600 transition-colors duration-300 text-md">
          <GithubIcon />
          <span>Sign in with GitHub</span>
        </button>
      </div>

      <div className="flex items-center my-6">
        <hr className="w-full border-slate-700" />
        <span className="px-4 text-slate-400 font-medium text-sm">or</span>
        <hr className="w-full border-slate-700" />
      </div>

      <form className="space-y-4">
        <div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Email or username"
            className="w-full px-4 py-3 bg-transparent border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-slate-100 text-slate-900 font-bold py-3 px-6 rounded-full hover:bg-slate-300 transition-colors duration-300"
        >
          Next
        </button>
        <button
          type="button"
          className="w-full bg-transparent text-slate-100 font-bold py-3 px-6 rounded-full hover:bg-slate-800 border border-slate-600 transition-colors duration-300"
        >
          Can&#39;t sign in?
        </button>
      </form>

      <div className="text-center text-xs text-slate-500 mt-10">
        <p>
          By signing in, you agree to the{" "}
          <a href="#" className="underline hover:text-slate-300">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-slate-300">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
