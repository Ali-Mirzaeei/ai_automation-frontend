import SignInPage from "@/components/modules/SignInPage";
import PageLayout from "@/components/organisms";
import React from "react";

function AuthenticationPage() {
  return (
    <PageLayout isAuthPage className="h-screen">
      <main className="flex-grow flex flex-1 items-center justify-center p-4">
        <SignInPage />
      </main>
    </PageLayout>
  );
}

export default AuthenticationPage;
