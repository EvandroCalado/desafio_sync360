import { zodResolver } from '@hookform/resolvers/zod';
import { Avatar, Button, Input, Textarea } from 'components';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

type UserProps = {
  id: number;
  name: string;
  age: number;
  street: string;
  district: string;
  state: string;
  bio: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

function App() {
  const [user, setUser] = useState<UserProps>({} as UserProps);

  useEffect(() => {
    (async () => {
      const user = await fetch('http://localhost:3333/user').then((res) =>
        res.json(),
      );

      setUser(user);
    })();
  }, []);

  const updateSchema = z.object({
    name: z
      .string()
      .min(3, 'O nome deve ter pelo menos 3 caracteres')
      .max(50, 'O nome deve ter no máximo 50 caracteres'),
    age: z.string().min(1, 'A idade deve ser um número'),
    street: z.string().min(3, 'A rua deve ter pelo menos 3 caracteres'),
    state: z.string().min(3, 'O estado deve ter pelo menos 3 caracteres'),
    district: z.string().min(3, 'O bairro deve ter pelo menos 3 caracteres'),
    bio: z
      .string()
      .min(20, 'A biografia deve ter pelo menos 20 caracteres')
      .max(200, 'A biografia deve ter no mínimo 200 caracteres'),
  });

  type UpdateFormData = z.infer<typeof updateSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateFormData>({ resolver: zodResolver(updateSchema) });

  const handleUpdate: SubmitHandler<UpdateFormData> = async (data) => {
    console.log(data);
  };

  return (
    <main className="py-4 md:py-12 px-4 md:px-24 lg:px-48 xl:px-64 mx-auto">
      <h1 className="text-xl lg:text-4xl capitalize font-bold text-center px-4 py-4 md:py-12">
        informações do usuário
      </h1>
      <div className="flex items-center gap-8 flex-col md:flex-row">
        <Avatar image={user.image} />

        <div>
          <h2 className="text-sm md:text-base xl:text-xl">
            Nome: <span className="text-gray-500">{user.name}</span>
          </h2>
          <h2 className="text-sm md:text-base xl:text-xl">
            Idade: <span className="text-gray-500">{user.age}</span>
          </h2>
          <h2 className="text-sm md:text-base xl:text-xl">
            Endereço: <span className="text-gray-500">{user.street}</span>
          </h2>
          <h2 className="text-sm md:text-base xl:text-xl">
            Bairro: <span className="text-gray-500">{user.district}</span>
          </h2>
          <h2 className="text-sm md:text-base xl:text-xl">
            Cidade: <span className="text-gray-500">{user.state}</span>
          </h2>
          <h2 className="text-sm md:text-base xl:text-xl">
            Biografia: <span className="text-gray-500">{user.bio}</span>
          </h2>
        </div>
      </div>

      <h2 className="text-xl lg:text-4xl capitalize font-bold text-center px-4 py-4 md:py-12">
        Atualizar dados
      </h2>

      <form
        onSubmit={handleSubmit(handleUpdate)}
        className="flex flex-col gap-4 2xl:w-3/4 mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <Input type="text" label="nome" register={register('name')} />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="w-full">
            <Input type="number" label="idade" register={register('age')} />
            {errors.age && (
              <span className="text-sm text-red-500">{errors.age.message}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <Input type="text" label="rua" register={register('street')} />
            {errors.street && (
              <span className="text-sm text-red-500">
                {errors.street.message}
              </span>
            )}
          </div>

          <div className="w-full">
            <Input type="text" label="cidade" register={register('district')} />
            {errors.district && (
              <span className="text-sm text-red-500">
                {errors.district.message}
              </span>
            )}
          </div>

          <div className="w-full">
            <Input type="text" label="estado" register={register('state')} />
            {errors.state && (
              <span className="text-sm text-red-500">
                {errors.state.message}
              </span>
            )}
          </div>
        </div>

        <div className="w-full">
          <Textarea label="biografia" register={register('bio')} />
          {errors.bio && (
            <span className="text-sm text-red-500">{errors.bio.message}</span>
          )}
        </div>

        <Button>Atualizar</Button>
      </form>
    </main>
  );
}

export default App;
