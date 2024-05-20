type OnlyFirstCharacter<TargetString extends string> =
  TargetString extends `${infer $TFirstChar}${string}` ? $TFirstChar : string;

export type Character<TargetString extends string> =
  TargetString extends TargetString & OnlyFirstCharacter<TargetString>
    ? TargetString & OnlyFirstCharacter<TargetString>
    : string & { length: 1 };
