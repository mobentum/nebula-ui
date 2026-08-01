import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AgentNode } from '../components/nodes/agent-node';
import { TaskNode } from '../components/nodes/task-node';
import { ConditionNode } from '../components/nodes/condition-node';
import { TriggerNode } from '../components/nodes/trigger-node';
import { FlowNode } from '../components/nodes/flow-node';

const renderNode = (node: (props: any) => React.ReactElement, props: any) =>
  render(node({ id: 'n', data: {}, ...props }));

describe('flow nodes', () => {
  it('AgentNode renders title, model and status', () => {
    renderNode(AgentNode, {
      data: { title: 'Support Bot', model: 'gpt-5', status: 'running' },
    });
    expect(screen.getByText('Support Bot')).toBeInTheDocument();
    expect(screen.getByText('gpt-5')).toBeInTheDocument();
    expect(screen.getByLabelText('Status: Running')).toBeInTheDocument();
  });

  it('TaskNode renders description and status', () => {
    renderNode(TaskNode, {
      data: { title: 'Send summary', description: 'Email the digest', status: 'success' },
    });
    expect(screen.getByText('Send summary')).toBeInTheDocument();
    expect(screen.getByText('Email the digest')).toBeInTheDocument();
    expect(screen.getByLabelText('Status: Success')).toBeInTheDocument();
  });

  it('ConditionNode renders branches', () => {
    renderNode(ConditionNode, {
      data: { title: 'Is urgent?', branches: ['yes', 'no'] },
    });
    expect(screen.getByText('Is urgent?')).toBeInTheDocument();
    expect(screen.getByText('yes / no')).toBeInTheDocument();
  });

  it('TriggerNode renders the event', () => {
    renderNode(TriggerNode, {
      data: { title: 'Inbound message', event: 'whatsapp' },
    });
    expect(screen.getByText('Inbound message')).toBeInTheDocument();
    expect(screen.getByText('whatsapp')).toBeInTheDocument();
  });

  it('FlowNode renders generic fields', () => {
    renderNode(FlowNode, {
      data: { title: 'Anything', subtitle: 'Custom node' },
    });
    expect(screen.getByText('Anything')).toBeInTheDocument();
    expect(screen.getByText('Custom node')).toBeInTheDocument();
  });

  it('renders source and target handles', () => {
    const { container } = renderNode(AgentNode, { data: { title: 'A' } });
    expect(container.querySelector('[data-handle-type="source"]')).toBeInTheDocument();
    expect(container.querySelector('[data-handle-type="target"]')).toBeInTheDocument();
  });
});
