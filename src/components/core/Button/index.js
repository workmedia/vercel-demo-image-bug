import tw, { styled } from 'twin.macro';

const Button = styled.button(({ primary, secondary, tertiary, white, full }) => [
  tw`transition duration-200 focus:outline-none rounded-sm text-sm font-semibold tracking-wide uppercase`,
  primary && tw`bg-red-construir text-white`,
  secondary && tw`bg-almost-black text-white`,
  tertiary && tw`border-1 border-gray-100`,
  white && tw`bg-white border-4 border-white text-almost-black hover:(bg-almost-black text-white)`,
  full && tw`w-full rounded-sm p-2`
]);

export default Button;
