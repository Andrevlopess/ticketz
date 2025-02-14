export default function NotFoundGlobalPage() {
  return (
    <div
      className={`antialiased min-h-screen flex items-center justify-center flex-col gap-4`}
    >
      <h5 className="font-medium text-2xl">Sorry, this page doesn't exists.</h5>
      <a href="/tickets" className="underline underline-offset-4">
        Return to home
      </a>
    </div>
  );
}
