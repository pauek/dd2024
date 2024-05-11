import AllCollapsedButton from "@/components/AllCollapsedButton";
import { CollapsedStateProvider } from "@/components/CollapsedState";
import Header from "@/components/Header";
import MrWolf from "@/components/MrWolf";
import Note from "@/components/Note";
import Pre from "@/components/Pre";
import Section from "@/components/Section";
import User from "@/components/User";
import { readFile } from "fs/promises";
import Link from "next/link";

const loadLines = async (
  filename: string,
  start?: number,
  end?: number,
  lineFunc?: (l: string) => string
) => {
  return (await readFile(filename))
    .toString()
    .split(`\n`)
    .slice(start, end)
    .map(lineFunc || ((s) => s))
    .join(`\n`);
};

export default async function Home() {
  const nextConfig = await loadLines(`next.config.mjs`, 1, 13);

  const userPage = await loadLines(`app/users/[id]/page.tsx`);
  const showUserListJSX = await loadLines(`app/users/page.tsx`, 7, 17, (ln) =>
    ln.slice(4)
  );

  const loadUserListFunc = await loadLines(`lib/users.tsx`, 0, 5);
  const loadUserFunc = await loadLines(`lib/users.tsx`, 6);

  const initialLayout = await loadLines(`app/users/initial_layout.tsx`);

  return (
    <main>
      <Header />
      <MrWolf />

      <CollapsedStateProvider>
        <AllCollapsedButton />
        <article className="relative flex flex-col gap-[.7em]">
          <Section id={1} header={<>Installing the tools</>}>
            <ol>
              <li>
                <Link href="https://bun.sh">Bun</Link>. Linux/Mac:{" "}
                <Pre>curl -fsSL https://bun.sh/install | bash</Pre>. Windows:{" "}
                <Pre>
                  powershell -c &quot;irm bun.sh/install.ps1 | iex&quot;
                </Pre>
              </li>
              <li>
                <Link href="https://code.visualstudio.com">
                  Visual Studio Code
                </Link>
                .
              </li>
            </ol>
            <Note>
              You might need <Link href="https://volta.sh">Volta</Link>, and,
              with Volta available, install{" "}
              <Link href="https://nodejs.org">Node 20</Link> with{" "}
              <Pre>volta install node@20</Pre>
            </Note>
          </Section>

          <Section id={2} header={<>Creating a NextJS project</>}>
            <p>
              In the terminal do: <br />
              <Pre>bunx create-next-app@latest</Pre>
            </p>
            <p>
              Choose this: a name, Typescript yes, ESLint yes, Tailwind CSS yes,{" "}
              <code>src/</code> dir no, App Router <strong>yes</strong>,
              customize blah-blah no.
            </p>
          </Section>

          <Section id={3} header={<>Project structure</>}>
            <ul>
              <li>
                <code>package.json</code> is the project&apos;s metadata.
              </li>
              <li>
                <code>app</code> directory contains pages.
              </li>
              <li>
                <code>node_modules</code> contains downloaded libraries (huge!).{" "}
                <span className="text-xs opacity-60">
                  (Can be erased and reconstructed with <Pre>bun install</Pre>.)
                </span>
              </li>
              <li>
                <code>public</code> contains files shown directly as they are.
              </li>
            </ul>
          </Section>

          <Section id={4} header={<>Workflow</>}>
            <table>
              <tr>
                <td>Develop&nbsp;&nbsp;</td>
                <td>
                  <Pre>bun run dev</Pre>
                </td>
              </tr>
              <tr>
                <td>Compile</td>
                <td>
                  <Pre>bun run build</Pre>
                </td>
              </tr>
              <tr>
                <td>Run</td>
                <td>
                  <Pre>bun run start</Pre>
                </td>
              </tr>
            </table>
            <p className="mt-1">
              <Note>
                The three scripts <code>dev</code>, <code>build</code>, and{" "}
                <code>start</code> are in <code>package.json</code>
              </Note>
            </p>
          </Section>

          <Section id={5} header={<>Pages</>}>
            <ul>
              <li>
                Each page is a <code>page.tsx</code> file, which generates the
                user interface.
              </li>
              <li>
                A <code>page.tsx</code> file has a single function returning{" "}
                <Link href="https://react.dev/learn/writing-markup-with-jsx">
                  JSX
                </Link>
                .
              </li>
              <li>
                Folders in <code>app</code> turn to folders in the URL.
              </li>
            </ul>
          </Section>

          <Section id={6} header={<>JSX</>}>
            <ul>
              <li>
                Javascript <strong>expressions</strong> which look like HTML.{" "}
                <Pre>{`let a = <div>hello</div>;`}</Pre>
              </li>
              <li>
                Each JSX expression must be only one element, (but there are
                fragments: <Pre>{`<></>`}</Pre>).
              </li>
              <li>
                Lowercase elements are normal HTML elements. Uppercase-named
                elements are <strong>components</strong>.
              </li>
              <li>
                JSX compiles into calls to{" "}
                <Link href="https://react.dev/reference/react/createElement">
                  <code>React.createElement</code>
                </Link>{" "}
                which produce a tree of objects. With this tree you can either
                generate HTML or mutate the DOM.
              </li>
            </ul>
          </Section>

          <Section id={7} header={<>Let&apos;s make a new page</>}>
            <ul>
              <li>
                Let&apos;s make a <code>/users</code> page, adding{" "}
                <code>app/users/page.tsx</code> and writing a <code>Page</code>{" "}
                function returning some JSX.
              </li>
              <li>
                Put a <Pre>{'<Link href="/">Back to main</Link>'}</Pre>. You
                will have to import it:{" "}
                <Pre>{`import { Link } from "next/link";`}</Pre>
              </li>
              <li>Put a link to the page from the main page as well.</li>
            </ul>
          </Section>

          <Section id={8} header={<>Components</>}>
            <ul>
              <li>
                A{" "}
                <Link href="https://react.dev/learn/your-first-component">
                  component
                </Link>{" "}
                is a function which generates a <strong>piece</strong> of a
                page.
              </li>
              <li>
                You can pass{" "}
                <Link href="https://react.dev/learn/passing-props-to-a-component">
                  <strong>props</strong>
                </Link>{" "}
                to it, like <Pre>{`<MyComp a={1} b={true} c="hi" />`}</Pre> (the
                props are <code>a</code>, <code>b</code> and <code>c</code>).
              </li>
              <li>
                Props are passed as a single parameter, which is an object with
                fields to the function <br />
                <Pre>{`export default function MyComp({ a, b, c }: MyCompProps) { 
  return <div>MyComp ...</div>;
}`}</Pre>
                <br />
                <Note>
                  In Typescript we can{" "}
                  <Link href="https://javascript.info/destructuring-assignment#object-destructuring">
                    destructure
                  </Link>{" "}
                  the object to get the props{" "}
                  <Link href="https://javascript.info/destructuring-assignment#smart-function-parameters">
                    right there in the function declaration
                  </Link>
                  .
                </Note>
              </li>
              <li>
                We also need the prop types:{" "}
                <Pre>{`type MyCompProps = { a: number; b: boolean; c: string };`}</Pre>
              </li>
            </ul>
          </Section>

          <Section id={9} header={<>A User component</>}>
            <ul>
              <li>
                Make a file <code>components/User.tsx</code>.
              </li>
              <li>
                Put a function <code>User</code> in it.
              </li>
              <li>
                The props will be: <code>fullName</code> (a string),{" "}
                <code>email</code> (a string), <code>avatar</code> (a string).
              </li>
              <li>
                Make it look like this:
                <p className="mt-1">
                  <User
                    fullName="Groucho Marx"
                    avatar="/groucho.jpg"
                    email="groucho@marx.com"
                  />
                </p>
                <Note className="mt-1">
                  (
                  <Link href="https://github.com/pauek/dd2024/blob/main/components/User.tsx">
                    cheat-sheet
                  </Link>
                  )
                </Note>
              </li>
            </ul>
          </Section>

          <Section id={10} header={<>Let&apos;s fetch some users</>}>
            <ul>
              <li>
                <code>fetch</code> is the standard way to get data using HTTP.
              </li>
              <li>
                It is an{" "}
                <Link href="https://javascript.info/async">asynchronous</Link>{" "}
                function.
              </li>
              <li>
                Write this function in <code>lib/users.tsx</code>: <br />
                <Pre>{loadUserListFunc}</Pre>
              </li>
              <li>
                On the{" "}
                <Link href="/users">
                  <code>/users</code>
                </Link>{" "}
                page call the function like this:{" "}
                <Pre>{`const users = await loadUsers();`}</Pre>. You will have
                to mark the <code>Page</code> function <code>async</code>.
              </li>
              <li>
                Show the users on the page with:
                <br />
                <Pre>{showUserListJSX}</Pre>
              </li>
              <li>
                NextJS will complain about images coming from{" "}
                <code>randomuser.me</code>, so let&apos;s fix that by changing
                the <code>next.config.mjs</code> file with: <br />
                <Pre>{nextConfig}</Pre>
              </li>
            </ul>
          </Section>

          <Section id={11} header={<>A page for each user</>}>
            <ul>
              <li>
                Create a folder <code>/users/[id]</code> (yes, with brackets).
              </li>
              <li>
                Add <code>loadUser</code> to <code>lib/users.tsx</code>:
                <br />
                <Pre>{loadUserFunc}</Pre>
              </li>
              <li>
                And create a <code>page.tsx</code> with:
                <br />
                <Pre>{userPage}</Pre>
              </li>
              <li>
                Now let&apos;s wrap each user with:
                <br />{" "}
                <Pre>{`{users.map((user: any, index: number) => (
  <Link key={user.email} href={\`/users/\${index}\`}>
  ...`}</Pre>{" "}
                <br />
                So that you can click and it will go to the appropriate page.
                Put a back link as well.
              </li>
            </ul>
          </Section>

          <Section id={12} header={<>A Layout</>}>
            <ul>
              <li>
                Create a <code>layout.tsx</code> file at the{" "}
                <code>app/users</code> folder: <br /> <Pre>{initialLayout}</Pre>
              </li>
              <li>Add some stuff to it that you can recognize later.</li>
              <li>
                The <code>Layout</code> component receives the <code>Page</code>{" "}
                component in the <code>children</code> prop, so it wraps it.
                Also wraps all nested pages!
              </li>
              <li>
                What happens if you also add a layout at{" "}
                <code>app/users/[id]</code>??
              </li>
            </ul>
          </Section>

          <Section id={13} header={<>Deploying</>}>
            <ul>
              <li>
                Create an account at{" "}
                <Link href="https://vercel.com">Vercel</Link>. If you have a{" "}
                <Link href="github.com">GitHub</Link> already, you can login
                with it.
              </li>
              <li>
                Now let&apos;s download the Command Line Interface (
                <code>cli</code>) for Vercel. In the terminal do:
                <br />
                <Pre>bun install -g vercel</Pre>
              </li>
              <li>
                Show the command help with <br />
                <Pre>vercel help</Pre>.
                <Note>Hint: read a little bit what it can do.</Note>
              </li>
              <li>
                Login to Vercel from the command-line with: <br />
                <Pre>vercel login</Pre>
              </li>
              <li>
                Deploy a preview with: <br />
                <Pre>vercel</Pre> <br />
                You will be assigned <code>vercel.app</code> domain that you can
                later associate with your domain, if needed.
              </li>
              <li>
                Deploy the <em>production version </em> with: <br />
                <Pre>vercel --prod</Pre> <br />
              </li>
              <li>
                If you make a repository of your project on GitHub, you can
                connect it with <br />
                <Pre>vercel git connect</Pre> <br />
                After this, Vercel will deploy when you push to the{" "}
                <code>main</code> branch.
                <Note>
                  You have to grant Vercel access to your GitHub repositories
                  first.
                </Note>
              </li>
            </ul>
          </Section>
        </article>
      </CollapsedStateProvider>
    </main>
  );
}
