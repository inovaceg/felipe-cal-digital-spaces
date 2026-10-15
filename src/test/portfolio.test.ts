import { describe, expect, it } from 'vitest';
import { projects, whatsapp, instagram } from '@/lib/portfolio';

describe('Portfolio content constraints', () => {
  it('contains exactly the five supplied projects', () => {
    expect(projects.map(project => project.name)).toEqual(['Crismar', 'Doces São Fidélis', 'Guaru Burguer', 'Dr. Frederick Parreira', 'Espaço Village']);
  });
  it('does not invent a URL for Dr. Frederick Parreira', () => {
    expect(projects.find(project => project.id === 'frederick')?.url).toBeUndefined();
  });
  it('uses the supplied WhatsApp contact', () => {
    expect(new URL(whatsapp).pathname).toBe('/5532984022567');
  });
  it('uses the supplied Instagram account', () => {
    expect(instagram).toBe('https://www.instagram.com/felipecal/');
  });
});