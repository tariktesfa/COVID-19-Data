import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ItemsCard from '../components/ItemsCard';

describe('Test the Country list', () => {
  it('Country section renders correctly', () => {
    const country = renderer.create(
      <MemoryRouter>
        <ItemsCard className="country display" />
        <h2 className="ea-country">Ethiopia</h2>
      </MemoryRouter>,
    ).toJSON();
    expect(country).toMatchSnapshot();
  });
});
