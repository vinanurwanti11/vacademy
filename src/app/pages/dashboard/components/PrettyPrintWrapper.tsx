import React, { FC } from 'react';

interface PrettyPrintWrapperProps {
  code: string;
  language?: string;
}

const PrettyPrintWrapper: FC<PrettyPrintWrapperProps> = ({ code, language = 'text' }) => {
  return (
    <pre>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default PrettyPrintWrapper;
