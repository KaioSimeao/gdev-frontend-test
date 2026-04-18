import { Input } from '../atoms/Input';

interface Props {
  label: string;
  type?: string;
  value: string;
  onChange: (e: any) => void;
  placeholder?: string;
}

export const FormField = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder
}: Props) => {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase font-bold text-gray-500">
        {label}
      </label>

      <Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border-b border-gray-300 bg-transparent px-0"
      />
    </div>
  );
};