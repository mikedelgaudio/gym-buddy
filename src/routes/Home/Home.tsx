import { useMemo } from 'preact/hooks';

export function Home() {
  const { date } = useMemo(() => {
    const date = new Date().toLocaleDateString('en-US', {
      weekday: 'long', // Full day name, e.g., "Wednesday"
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });

    return { date };
  }, []);

  return (
    <div class="grid">
      <section class="grid grid-cols-1 gap-6">
        <div>
          <small>{date}</small>
          <h1 class="font-bold text-4xl">
            Today is <span class={'underline'}>back</span> day
          </h1>
          <p>
            Your last back day was on <span class={'underline'}>{date}</span>
          </p>
        </div>

        <dl class="text-gray-900 divide-y divide-gray-200">
          <button class="flex flex-col p-3 w-full hover:bg-gray-50">
            <dt class="mb-1 text-gray-500 md:text-lg">Back</dt>
            <dd class="w-full text-lg font-semibold flex justify-between items-center">
              <span>Lat Pulldown</span>
              <div>
                PR <span>75</span>lbs x <span>10</span>
              </div>
            </dd>
          </button>
          <div class="flex flex-col py-3">
            <dt class="mb-1 text-gray-500 md:text-lg">Back</dt>
            <dd class="text-lg font-semibold">Cable Rows</dd>
          </div>
          <div class="flex flex-col pt-3">
            <dt class="mb-1 text-gray-500 md:text-lg">Bicep</dt>
            <dd class="text-lg font-semibold">Hammer Curls</dd>
          </div>
          <div class="flex flex-col pt-3">
            <dt class="mb-1 text-gray-500 md:text-lg">Bicep</dt>
            <dd class="text-lg font-semibold">Bicep Curls</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
