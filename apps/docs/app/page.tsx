import Accordion from "@snapverse/ui-kit/accordion";

export default function Home() {
  return (
    <div>
      <Accordion.Root>
        <Accordion.Item>
          <p>Hello World :D</p>
        </Accordion.Item>
        <Accordion.Item>
          <p>Bye World :(</p>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
