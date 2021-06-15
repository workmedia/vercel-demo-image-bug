import tw, { styled } from 'twin.macro';

const LinkItemComponent = styled.a(({ isActive }) => [
  tw`cursor-pointer`,
  isActive && tw`text-red-red `
]);

export default LinkItemComponent;
