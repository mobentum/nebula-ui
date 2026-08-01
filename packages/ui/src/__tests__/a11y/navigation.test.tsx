import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Alert,
  Badge,
  Breadcrumb,
  Button,
  ButtonGroup,
  Card,
  Heading,
  Kbd,
  Pagination,
  Tabs,
  Text,
} from '../../index';
import { axe } from './axe';

describe('a11y: navigation and display', () => {
  it('Button has no violations', async () => {
    const { container } = render(<Button>Click me</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('ButtonGroup has no violations', async () => {
    const { container } = render(
      <ButtonGroup.Root>
        <Button size="sm">First</Button>
        <Button size="sm">Second</Button>
      </ButtonGroup.Root>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Badge has no violations', async () => {
    const { container } = render(<Badge>New</Badge>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Alert with title and description has no violations', async () => {
    const { container } = render(
      <Alert.Root>
        <Alert.Title>Heads up</Alert.Title>
        <Alert.Description>You can add components to your app.</Alert.Description>
      </Alert.Root>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Card with heading has no violations', async () => {
    const { container } = render(
      <Card.Root>
        <Card.Header>
          <Heading as="h3">Card title</Heading>
        </Card.Header>
        <Card.Body>
          <Text>Card body text</Text>
        </Card.Body>
      </Card.Root>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Kbd has no violations', async () => {
    const { container } = render(<Kbd>Ctrl</Kbd>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Breadcrumb has no violations', async () => {
    const { container } = render(
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Page>Current</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Pagination has no violations', async () => {
    const { container } = render(
      <Pagination.Root>
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Previous href="#" aria-label="Previous page" />
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Page href="#" aria-current="page">
              1
            </Pagination.Page>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Page href="#">2</Pagination.Page>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Next href="#" aria-label="Next page" />
          </Pagination.Item>
        </Pagination.List>
      </Pagination.Root>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Tabs have no violations', async () => {
    const { container } = render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List aria-label="Settings">
          <Tabs.Tab value="tab1">Account</Tabs.Tab>
          <Tabs.Tab value="tab2">Security</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Account content</Tabs.Panel>
      </Tabs.Root>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Tabs support keyboard navigation with arrow keys', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List aria-label="Settings">
          <Tabs.Tab data-testid="tab1" value="tab1">Account</Tabs.Tab>
          <Tabs.Tab data-testid="tab2" value="tab2">Security</Tabs.Tab>
        </Tabs.List>
      </Tabs.Root>,
    );
    await user.click(container.querySelector('[data-testid="tab1"]') as HTMLElement);
    await user.keyboard('{ArrowRight}');
    expect(container.querySelector('[data-testid="tab2"]')).toHaveFocus();
  });
});
