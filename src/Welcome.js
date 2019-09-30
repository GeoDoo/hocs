import React from 'react';
import { withUser } from './hocs';
import userData from './data/user.json';

const Welcome = ({ user }) => <p>Welcome {user.name}!</p>;

export const WelcomeGuest = withUser(Welcome);
export const WelcomeUser = withUser(Welcome, () => userData);