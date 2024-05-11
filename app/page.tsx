import Alternate from "@/components/Alternate";
import Image from "next/image";
import wolf from "./wolf.webp";
import Section from "@/components/Section";
import Link from "next/link";
import Pre from "@/components/Pre";
import Note from "@/components/Note";
import User from "@/components/User";

export default function Home() {
  return (
    <main>
      <header className="mb-4 border-b relative">
        <h1 className="leading-6 mt-6">
          <Alternate
            alt={
              <span className="text-yellow-400 bg-black px-2 rounded">
                NextJS Real F*#kin&apos; Fast 😈 MMWAHAHA!1! 🤘🏻🤘🏻
              </span>
            }
          >
            Taking web development to the NextJS level
          </Alternate>
          <div className="text-xl text-gray-600 mt-1">
            Data Days, <span className="font-light">May 2024</span>
          </div>
          <div className="text-sm font-normal">
            {" "}
            <div className="absolute -top-6 left-0">
              by{" "}
              <Link href="https://pauek.dev" className="text-blue-600 ">
                @pauek
              </Link>
            </div>
          </div>
        </h1>
      </header>

      <Alternate
        alt={
          <section>
            <div>
              <Image src={wolf} alt="Mr. Wolf" />
              <h2
                className={
                  "absolute text-white bottom-[30%] left-0 right-0 text-center " +
                  "font-bold text-5xl z-20 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]"
                }
              >
                <div className="relative w-20 h-0 inline-block mb-2 border border-yellow-400">
                  <div className="absolute -right-4 -bottom-[.14em] text-8xl">
                    🏎️
                  </div>
                </div>{" "}
                💨&nbsp;&nbsp;I CODE REAL FUCKING FAST
              </h2>
            </div>
          </section>
        }
      >
        <div
          className={
            "border border-yellow-600 rounded-full p-1.5 px-3 font-bold " +
            "text-lg bg-yellow-100 w-[20em] mb-5 hover:border-yellow-800"
          }
        >
          ⚠️ Warning
        </div>
      </Alternate>

      <article className="relative">
        <Section header={<>1. Installing the tools</>}>
          <ol>
            <li>
              <Link href="https://bun.sh">Bun</Link>. For Mac or Linux:{" "}
              <Pre>curl -fsSL https://bun.sh/install | bash</Pre>. For Windows:{" "}
              <Pre>powershell -c &quot;irm bun.sh/install.ps1 | iex&quot;</Pre>
            </li>
            <li>
              <Link href="https://code.visualstudio.com">
                Visual Studio Code
              </Link>
              .
            </li>
          </ol>
          <Note>
            You might need <Link href="https://volta.sh">Volta</Link>, and, with
            Volta available, install{" "}
            <Link href="https://nodejs.org">Node 20</Link> with{" "}
            <Pre>volta install node@20</Pre>
          </Note>
        </Section>

        <Section header={<>2. Creating a NextJS project</>}>
          <Pre>bunx create-next-app@latest</Pre>
          <p>
            Choose this: a name, Typescript yes, ESLint yes, Tailwind CSS yes,{" "}
            <code>src/</code> dir no, App Router <strong>yes</strong>, customize
            blah-blah no.
          </p>
        </Section>

        <Section header={<>3. Taking a look</>}>
          <ul>
            <li>
              <code>package.json</code> is the project&apos;s metadata.
            </li>
            <li>
              <code>app</code> directory contains pages.
            </li>
            <li>
              <code>node_modules</code> contains downloaded libraries (huge!).
            </li>
            <li>
              <code>public</code> contains files shown directly as they are.
            </li>
          </ul>
        </Section>

        <Section header={<>4. Workflow</>}>
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

        <Section header={<>5. Pages</>}>
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

        <Section header={<>6. JSX</>}>
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
          </ul>
        </Section>

        <Section header={<>7. Let&apos;s make a new page</>}>
          <ul>
            <li>
              Let&apos;s make a <code>/users</code> page, adding{" "}
              <code>app/users/page.tsx</code> and writing a <code>Page</code>{" "}
              function returning some JSX.
            </li>
            <li>
              Put a <Pre>{'<Link href="/">Back to main</Link>'}</Pre>. You will
              have to import it:{" "}
              <Pre>{`import { Link } from "next/link";`}</Pre>
            </li>
            <li>Put a link to the page from the main page as well.</li>
          </ul>
        </Section>

        <Section header={<>8. Components</>}>
          <ul>
            <li>
              A component is a function which generates a <strong>piece</strong>{" "}
              of a page.
            </li>
            <li>
              You can pass <strong>props</strong> to it, like{" "}
              <Pre>{`<MyComp a={1} b={true} c="hi" />`}</Pre> (the props are{" "}
              <code>a</code>, <code>b</code> and <code>c</code>).
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
                  right in the declaration
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

        <Section
          header={
            <>
              9. Let&apos;s write a <code>User</code> component
            </>
          }
        >
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
            </li>
          </ul>
        </Section>
      </article>
    </main>
  );
}
