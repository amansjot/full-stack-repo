import * as React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex as="nav" padding="1.5rem" justifyContent="center">
      <Link as={RouterLink} to="/" padding="1rem">
        Home
      </Link>
      <Link as={RouterLink} to="/about" padding="1rem">
        About
      </Link>
      {/* Add additional navigation links here */}
    </Flex>
  );
};

export default Navbar;
